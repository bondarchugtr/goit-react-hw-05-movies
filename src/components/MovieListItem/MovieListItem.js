import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import s from "./MovieListItem.module.css";
import noImage from "../../image/no-img.png";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
export default function MovieListItem({ onClick, id, src, title }) {
  const location = useLocation();
  return (
    <li className={s.gallery__item__movie}>
      <Link
        to={{ pathname: `/movies/${id}` }}
        state={{
          from: location,
        }}
      >
        <img
          onClick={onClick}
          id={id}
          src={src ? `https://image.tmdb.org/t/p/w500${src}` : noImage}
          alt={title}
          width="280px"
          height="398px"
        />
      </Link>
      <h2 className={s.gallery__item__movie__title}>{title}</h2>
    </li>
  );
}
