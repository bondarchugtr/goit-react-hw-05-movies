import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RenderReviewsCard } from "../Api/Api";
import ReviewsItem from "../Reviews/ReviewsItem";

export default function RenderReviews() {
  const [movieCard, setMovieCard] = useState("");
  const params = useParams();
  //   let location = useLocation().pathname;
  useEffect(() => {
    if (params.id) {
      RenderReviewsCard(params.id).then((param) => setMovieCard(param.results));
    }
  }, []);

  return (
    <>
      {movieCard && (
        <ul>
          {movieCard.map((el) => (
            <ReviewsItem key={el.id} data={el} />
          ))}
        </ul>
      )}
    </>
  );
}
