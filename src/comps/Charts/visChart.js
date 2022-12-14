import { interpolateWarm } from "d3";
import { dataCreate, subSample } from "./chartHelper";
import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

//benötigt
//<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css">

export function Chart(props) {
  //console.log(props);
  /*   let plotData = props.app_data.map((item) => {
    return {
      x: item.field_1,
      y: item.wind,
    };
  }); */

  //console.log(plotData);
  let plotData = dataCreate(props, "d3");
  /*   console.log(plDa);
  let plotData = subSample(plDa, 25, props.var_key.var1_key);
  console.log(plotData);
  let index = Math.floor(
    (plotData.length * props.dateIndex) / props.app_data.length
  ); */

  //console.log(index);
  return (
    <div>
      <XYPlot height={400} width={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={plotData} />
        <MarkSeries data={[plotData[props.dateIndex]]} color={"red"} />
      </XYPlot>
    </div>
  );
}
