import React, { useState, useEffect } from "react";
import { RenderMovieSearch } from "../Api/Api";
import MovieListItem from "../MovieListItem/MovieListItem";
import ThreeDots from "../Loader/Loader";
import { scrollTop } from "../Scroll/scrollTop";
import s from "../../views/HomePage/HomePage.module.css";
import Button from "../../components/Button/Button";

export default function MovieSearch({ movie }) {
  const [movieArraySearch, setMovieArraySearch] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movie) {
      return;
    }
    if (movie) {
      setLoading(true);
      RenderMovieSearch(movie, page)
        .then((data) =>
          setMovieArraySearch([...movieArraySearch, ...data.results])
        )
        .finally(() => setLoading(false));
    }
    if (movie !== currentMovie) clearOnNewRequest();
  }, [currentMovie, movie, page]);
  const clearOnNewRequest = () => {
    setMovieArraySearch([]);
    setPage(1);
    setCurrentMovie(movie);
  };

  const onClickBtn = () => {
    setPage((page) => page + 1);
    scrollTop();
  };

  return (
    <>
      <div className={s.movie__home__container}>
        {movieArraySearch.length > 0 && (
          <ul className={s.movie__list__container}>
            {movieArraySearch.map((el) => (
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
      {movieArraySearch.length > 0 && (
        <Button onClick={onClickBtn}>Load More</Button>
      )}
      {loading && <ThreeDots />}
    </>
  );
}
