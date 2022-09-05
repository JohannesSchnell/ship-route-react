import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./comps/oldies/App";
import { Select } from "./comps/Select";

import { iterateOverJSON, makeData } from "./comps/helper.js";
import { jsonData } from "./data/data_carl.js";

import store from "./state/store";
import { Provider } from "react-redux";

//data import später fetch
const app_data = iterateOverJSON(jsonData.features);

//data reduction

let data = {
  appData: app_data,
};
const dataLength = data.length;
export { dataLength };
//console.log(data);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Select {...data} />
      {/* <App {...data} /> */}
    </React.StrictMode>
  </Provider>
);
