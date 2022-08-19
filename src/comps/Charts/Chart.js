import React from "react";
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
  ContinuousSizeLegend,
} from "react-vis";

import { keyButtner as keyS } from "../../data/keys";
import { color } from "d3";
console.log(keyS);
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
  console.log(props);
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
  return (
    <div>
      <div>
        <Map {...props.mapData} />
      </div>
      <div>
        <XYPlot height={600} width={800}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <ContinuousSizeLegend endTitle={"los"} startTitle={"stop"} />
          <LineSeries
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
        </XYPlot>
      </div>
      <div>
        <XYPlot height={600} width={800}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <ContinuousSizeLegend endTitle={"los"} startTitle={"stop"} />
          <LineSeries
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
        </XYPlot>
      </div>
    </div>
  );
}
