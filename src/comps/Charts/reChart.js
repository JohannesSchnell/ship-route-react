import { createContext, React, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

//import { ActiveWeekLabel, myLineContext } from "./RefDot.tsx";

//https://github.com/recharts/recharts/issues/544 just update reference dot not the whole graph needs ts files

export function Chart(props) {
  //console.log(props);

  return (
    <div>
      <div className="lineChart">
        <LineChart
          width={730}
          height={250}
          data={props.app_data}
          margin={{ top: 5, right: 30, left: -30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.var_key.date_key} />
          <YAxis />

          <Legend />
          <Line
            type="monotone"
            dataKey={props.var_key.var1_key}
            stroke="#8884d8"
            dot={false}
          />

          {/* <ReferenceLine y={props.app_data[props.dateIndex][props.var_key.var1_key]} />  */}
          {/*           <ReferenceDot
            x={props.app_data[props.dateIndex][props.var_key.date_key]}
            y={props.app_data[props.dateIndex][props.var_key.var1_key]}
            fill="red"
            r={3}
      /> */}
          <ReferenceDot
            x={props.app_data[props.dateIndex][props.var_key.date_key]}
            y={props.app_data[props.dateIndex][props.var_key.var1_key]}
            fill="red"
            r={3}
          />
        </LineChart>
      </div>
      <div></div>
    </div>
  );
}
