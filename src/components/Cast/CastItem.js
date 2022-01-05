import React from "react";
import s from "./Cast.module.css";
import noImage from "../../image/no-img.png";
export default function CastItem({ id, character, name, src }) {
  return (
    <>
      <li className={s.cast__item}>
        <img
          id={id}
          src={src ? `https://image.tmdb.org/t/p/w500${src}` : noImage}
          alt={name}
          width="200px"
          height="298px"
        />
        <div className={s.cast__actors}>
          <p>{character} </p>
          <p>{name}</p>
        </div>
      </li>
    </>
  );
}
