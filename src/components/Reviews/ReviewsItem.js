import React from "react";
import s from "./ReviewsItem.module.css";
export default function ReviewsItem({ id, data }) {
  return (
    <>
      <li id={id}>
        <h3 className={s.reviews__title}>{data.author}</h3>
        <p>{data.content}</p>
      </li>
    </>
  );
}
