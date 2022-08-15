import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { iterateOverJSON, makeData } from "./comps/helper.js";
import { jsonData } from "./data/data_carl.js";

const app_data = iterateOverJSON(jsonData.features);
//const windspd = makeData(app_data, "wind");
//console.log(app_data);

let data = {
  app_data: app_data,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
