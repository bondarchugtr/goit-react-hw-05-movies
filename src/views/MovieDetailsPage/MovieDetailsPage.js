import React, { useState, useEffect, lazy, Suspense } from "react";
import { RenderParamsCard } from "../../components/Api/Api";
import { useLocation, useParams } from "react-router";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import noImg from "../../image/no-img.png";

import s from "./MovieDetailsPage.module.css";
import Button from "../../components/Button/Button";
import ThreeDots from "../../components/Loader/Loader";
const CastList = lazy(() => import("../../components/Cast/CastList"));
const ReviewsList = lazy(() => import("../../components/Reviews/ReviewsList"));

export default function MovieParamCard() {
  const [movieCard, setMovieCard] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      setLoading(true);
      RenderParamsCard(params.id)
        .then((param) => setMovieCard(param))
        .finally(() => setLoading(false));
    }
  }, []);
  const genres = movieCard.genres
    ? movieCard.genres.map((el) => el.name).join(", ")
    : [];
  const {
    original_title,
    overview,
    vote_average,
    vote_count,
    popularity,
    poster_path,
    original_name,
  } = movieCard;

  // const onClickButton = (type) => {
  //   let loc = "";
  //   if (!location.state) {
  //     const str = location.pathname.split("/");
  //     loc = `/${str[1]}/${str[2]}`;
  //   } else {
  //     console.log(location.pathname);
  //     loc = location.state?.prevLoc ?? location.pathname;
  //     console.log(location.pathname.split("/"));
  //   }
  //   console.log(loc);
  //   console.log(type);
  //   navigate(`${loc}/${type}`, { state: { ...location.state, prevLoc: loc } });
  //   console.log(location.state.prevLoc);
  // };

  const goBack = () => {
    navigate(location?.state?.from ?? "/movies");
  };

  return (
    <>
      <div>
        <Button onClick={goBack}>Back</Button>
      </div>
      <div className={s.details__container}>
        <img
          className={s.details__image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${movieCard.poster_path}`
              : noImg
          }
          alt={original_name}
          width="280"
        />
        <div className={s.details__content}>
          <h2 className={s.details__content__title}>{original_title}</h2>
          <p className={""}>{overview}</p>
          <table className={s.details__movie__table}>
            <tbody className={s.details__options__list}>
              <tr className={""}>
                <td className={s.movie__table__list}>{genres}</td>
                <td className={s.movie__table__second__list}>
                  <span className={s.movie__text__box}>{vote_average}</span>
                  <span className={s.movie__text__box__secondary}>
                    {vote_count}
                  </span>
                </td>
              </tr>
              <tr className={s.movie__table__row}>
                <td className={s.movie__table__list}>Popularity</td>
                <td className={s.movie__table__second__list}>{popularity}</td>
              </tr>
              <tr className="modal-one-movie__table--row">
                <td className={s.movie__table__list}>Genre</td>
                <td className={s.movie__table__second__list}>{genres}</td>
              </tr>
              <tr className="modal-one-movie__table--row">
                <td className={s.movie__table__list}>Original title</td>
                <td className={s.movie__table__second__list}>
                  {original_title}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <h3 className={s.details__movie__about__title}>ABOUT</h3>
            <p className={s.details__movie__about__text}>{overview}</p>
          </div>
        </div>
      </div>
      <div className={s.link__details__block}>
        <Link to={`cast`} className={s.link__details}>
          Cast
        </Link>
        <Link to={`reviews`} className={s.link__details}>
          Reviews
        </Link>
        {/* <Button
          onClick={() => {
            onClickButton("cast");
          }}
        >
          Cast
        </Button> */}
        {/* <Button
          onClick={() => {
            onClickButton("review");
          }}
        >
          Review
        </Button> */}
      </div>
      <Suspense fallback={<ThreeDots />}>
        <Routes>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Routes>
      </Suspense>
    </>
  );
}
