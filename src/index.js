import React from "react";
import ReactDOM from "react-dom/client";

import store from "./comps/state/store";
import { Provider } from "react-redux";

import "./index.css";
import "./css/App.css";

import { Select } from "./comps/Select";

import { iterateOverJSON } from "./comps/helper.js";
import { jsonData } from "./data/data_carl.js";

//data import später fetch
const app_data = iterateOverJSON(jsonData.features);

let data = {
  appData: app_data,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Select {...data} />
    </React.StrictMode>
  </Provider>
);
