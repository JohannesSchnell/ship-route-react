import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../state/indexSlice";

import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
} from "react-vis";

import { keyButtner as keyS } from "../../data/keys";

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
  const dateIndex = useSelector((state) => state.index.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <XYPlot height={200} width={1200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />

          <LineSeries
            onNearestX={(datapoint, { index }) =>
              dispatch(updateState(Number(index)))
            }
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

          <Crosshair
            values={[{ x: props.dateData[dateIndex], y: 0 }]}
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
            onNearestX={(datapoint, { index }) =>
              dispatch(updateState(Number(index)))
            }
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

          <Crosshair values={[{ x: props.dateData[dateIndex], y: 0 }]}>
            {/* Divs inside Crosshair Component required to prevent value box render */}
            <div className="crosshairoRonaldo"></div>
          </Crosshair>
        </XYPlot>
      </div>
    </div>
  );
}
