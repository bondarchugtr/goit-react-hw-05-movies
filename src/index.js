import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RenderCastCard } from "./components/Api/Api";
// import CastList from "./components/Cast/CastList";
RenderCastCard();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CastList /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
