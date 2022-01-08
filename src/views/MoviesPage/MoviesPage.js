import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieListSearch/MovieListSearch";
import { NoMatch } from "../NavMenu/NavMenu";
import { toast } from "react-toastify";

import s from "./MoviesPage.module.css";
export default function MoviesSearchPage() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movie, setMovie] = useState("");
  let navigate = useNavigate();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery) {
      setMovieSearch(searchQuery);
    }
  }, []);
  const searchMovies = (e) => {
    setMovie(e.target.value.toLowerCase());
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (movie.trim() === "") {
      toast.warn("input name movie");
      return;
    }

    setMovieSearch(movie);
    navigate({
      ...location.state,
      search: `query=${movie}`,
    });
    setMovie("");
  };

  return (
    <>
      <>
        <header className={s.form__block}>
          <form className={s.form} onSubmit={handleSubmit}>
            <button className={s.button__submit} type="submit">
              <span className={s.button__label}>Search</span>
            </button>
            <input
              onChange={searchMovies}
              className={s.input}
              type="text"
              placeholder="Search images and photos"
              value={movie}
            />
          </form>
        </header>
      </>
      <MovieSearch movie={movieSearch} />
    </>
  );
}
