import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./views/NavMenu/NavMenu";
import { NoMatch } from "./views/NavMenu/NavMenu";
import ThreeDots from "./components/Loader/Loader";
import "modern-normalize/modern-normalize.css";
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesSearchPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
export default function App() {
  return (
    <>
      <Suspense fallback={<ThreeDots />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies/" element={<MoviesSearchPage />} />
            <Route path="movies/:id/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
