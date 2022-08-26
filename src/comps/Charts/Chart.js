import { React, useState } from "react";
import { Map } from "../Map";

import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  DiscreteColorLegend,
} from "react-vis";

import { keyButtner as keyS } from "../../data/keys";
import { color } from "d3";
import { Printprops } from "../Prints";

//console.log(keyS);
//benötigt
//<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css">

function createPlotData(dateData, varData, var_key) {
  let plotArr = [];
  for (let i in varData[var_key]) {
    plotArr.push({ x: dateData[i], y: varData[var_key][i] });
  }
  return plotArr;
}

export function Chart(props) {
  //console.log(props);
  /*   let plotData = props.app_data.map((item) => {
    return {
      x: item.field_1,
      y: item.wind,
    };
  }); */

  //console.log(plotData);
  //let plotData = dataCreate(props, "d3");
  /*   console.log(plDa);
  let plotData = subSample(plDa, 25, props.var_key.var1_key);
  console.log(plotData);
  let index = Math.floor(
    (plotData.length * props.dateIndex) / props.app_data.length
  ); */

  //console.log(plotData);

  const [dateIndex, setdateIndex] = useState(
    Math.floor(props.dateData.length / 2)
  );
  //console.log(    createPlotData(props.dateData, props.varData, keyS.var4_key)[dateIndex]  );
  //const [vertLine, setvertLine] = useState([]);
  const mapProps = {
    mapData: props.mapData,
    dateIndex: dateIndex,
  };

  const printProps = {
    printProps: props.varData,
    dateIndex: dateIndex,
  };
  return (
    <div>
      <div>
        <Map {...mapProps} />
      </div>
      <div>
        <XYPlot height={200} width={1200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

          <LineSeries
            onNearestX={(datapoint, { index }) => setdateIndex(index)}
            data={createPlotData(props.dateData, props.varData, keyS.var3_key)}
            color={"red"}
          />
          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var4_key)}
          />
          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var5_key)}
          />

          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var1_key)}
          />
          {/* <MarkSeries data={[plotData[props.dateIndex]]} color={"red"} /> */}
          <Crosshair
            values={[
              //createPlotData(props.dateData, props.varData, keyS.var4_key)
              { x: props.dateData[dateIndex], y: 0 },
            ]}
            style={{
              line: {
                width: "1px",
                color: "black",
                stroke: "black",
              },
            }}
          >
            {/* Divs inside Crosshair Component required to prevent value box render */}
            <div className="crosshairoRonaldo">
              <p></p>
            </div>
          </Crosshair>
        </XYPlot>

        <XYPlot height={200} width={1200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

          <LineSeries
            onNearestX={(datapoint, { index }) => setdateIndex(index)}
            data={createPlotData(props.dateData, props.varData, keyS.var6_key)}
            color={"red"}
          />
          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var7_key)}
          />
          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var8_key)}
          />

          <LineSeries
            data={createPlotData(props.dateData, props.varData, keyS.var9_key)}
          />
          {/* <MarkSeries data={[plotData[props.dateIndex]]} color={"red"} /> */}
          <Crosshair
            values={[
              //createPlotData(props.dateData, props.varData, keyS.var4_key)
              { x: props.dateData[dateIndex], y: 0 },
            ]}
          >
            {/* Divs inside Crosshair Component required to prevent value box render */}
            <div className="crosshairoRonaldo"></div>
          </Crosshair>
        </XYPlot>
      </div>
    </div>
  );
}
