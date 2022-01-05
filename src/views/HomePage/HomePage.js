import React, { useState, useEffect } from "react";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import { RenderMovieHome } from "../../components/Api/Api";
import ThreeDots from "../../components/Loader/Loader";
import { scrollTop } from "../../components/Scroll/scrollTop";
import Button from "../../components/Button/Button";
import s from "./HomePage.module.css";
export default function MovieHomePage() {
  const [movieArray, setMovieArray] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (movieArray) {
      setLoading(true);
      RenderMovieHome(page)
        .then((data) => setMovieArray([...movieArray, ...data.results]))
        .finally(() => setLoading(false));
    }
  }, [page]);
  const onClickBtn = () => {
    setPage((page) => page + 1);
    scrollTop();
  };
  return (
    <>
      <div className={s.movie__home__container}>
        {movieArray.length > 0 && (
          <ul className={s.movie__list__container}>
            {movieArray.map((el) => (
              <MovieListItem
                title={el.original_title}
                key={el.id}
                id={el.id}
                src={el.poster_path}
                alt={el.tags}
              />
            ))}
          </ul>
        )}
      </div>
      <Button onClick={onClickBtn}>Load More</Button>
      {loading && <ThreeDots />}
    </>
  );
}
