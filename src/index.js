import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
