import { React, useState } from "react";
import "../../css/App.css";
import { Map } from "../Map.js";
import { Chart } from "../Charts/oldies/visChart.js";
import { Slider } from "./Slider.js";
import { Page } from "./Page.js";
import { Printprops } from "./Prints";
import { keys } from "../helper.js";

//import { ActiveWeekLabel, myLineContext } from "./comps/oldies/RefDot.tsx";

function App(props) {
  //console.log(props);
  const [dateIndex, setdateIndex] = useState(
    Math.floor(props.app_data.length / 2)
  );
  let app_props = {
    app_data: props.app_data,
    plotData: props.plotData,
    dateIndex: dateIndex,
    var_key: keys(2),
  };
  console.log(app_props);
  return (
    <div>
      <div>
        <Page />
      </div>
      <div>
        <div className="dateslider">
          <input
            type="range"
            min={0}
            max={props.app_data.length - 1}
            value={dateIndex}
            className="slider"
            id="dateSlider"
            onChange={(e) => setdateIndex(e.target.value)}
          ></input>
        </div>

        <div className="wrapper">
          <div className="map">
            <Map {...app_props} />
          </div>
          <div className="print">
            <Printprops {...app_props} />
          </div>
          <div className="chart">
            <Chart {...app_props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
