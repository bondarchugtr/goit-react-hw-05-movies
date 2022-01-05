import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { RenderCastCard } from "../Api/Api";
import CastItem from "./CastItem";
import s from "./Cast.module.css";
import { scrollTop } from "../Scroll/scrollTop";
export default function CastList() {
  const [idMovie, setIdMovie] = useState(null);
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    RenderCastCard(params.id).then((params) => setIdMovie(params.cast));
    scrollTop();
  }, []);
  return (
    <div className={s.cast__container}>
      {idMovie && (
        <ul className={s.cast__list}>
          {idMovie.map((el) => (
            <CastItem
              key={el.id}
              id={el.id}
              src={el.profile_path}
              character={el.character}
              name={el.name}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
