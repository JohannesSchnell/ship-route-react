import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Select } from "./comps/Select";
import reportWebVitals from "./reportWebVitals";
import { iterateOverJSON, makeData } from "./comps/helper.js";
import { jsonData } from "./data/data_carl.js";

//data import später fetch
const app_data = iterateOverJSON(jsonData.features);

//data reduction

let data = {
  appData: app_data,
};

console.log(data);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Select {...data} />
    {/* <App {...data} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
