import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormMakeUsers from "./components/FormMakeUsers";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FormMakeUsers />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
