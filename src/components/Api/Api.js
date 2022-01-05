const API_KEY = "843d6905879c9b52f41f5f6a1e2c8966";
const BASE_URL = "https://api.themoviedb.org/3";
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;

export function RenderMovieHome(page) {
  // const REQUEST_ADRESS = `${SEARCH_URL}?api_key=${API_KEY}&query=${movieSearch}&page=${page}&language=uk-ua`;
  const REQUEST_ADRESS = `${TREND_URL}?api_key=${API_KEY}&page=${page}`;

  return BaseFetch(REQUEST_ADRESS)
    .then((data) => {
      if (data.results.length === 0) {
        throw new Error("data.results.length");
      } else {
        return data;
      }
    })
    .catch((error) => {
      "renderErrorSearch";
    });
}

export function RenderMovieSearch(movie, page) {
  const REQUEST_ADRESS = `${SEARCH_URL}?api_key=${API_KEY}&query=${movie}&page=${page}&language=uk-ua`;

  return BaseFetch(REQUEST_ADRESS)
    .then((data) => {
      if (data.results.length === 0) {
        throw new Error("data.results.length");
      } else {
        return data;
      }
    })
    .catch((error) => {
      "renderErrorSearch";
    });
}

export function RenderParamsCard(idMovie) {
  const REQUEST_ADRESS = `${ID_URL}${idMovie}?api_key=${API_KEY}&language=en-US`;
  return BaseFetch(REQUEST_ADRESS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      "renderErrorSearch";
    });
}

export function RenderCastCard(idMovie) {
  const REQUEST_ADRESS = `${ID_URL}${idMovie}/credits?api_key=${API_KEY}&language=en-US`;
  return BaseFetch(REQUEST_ADRESS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      "renderErrorSearch";
    });
}

export function RenderReviewsCard(idMovie) {
  const REQUEST_ADRESS = `${ID_URL}${idMovie}/reviews?api_key=${API_KEY}&language=en-US`;
  return BaseFetch(REQUEST_ADRESS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      "renderErrorSearch";
    });
}

function BaseFetch(REQUEST_ADRESS) {
  return fetch(REQUEST_ADRESS)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("renderErrorServer");
      }
    })
    .catch((error) => {
      "renderErrorServer";
    });
}
