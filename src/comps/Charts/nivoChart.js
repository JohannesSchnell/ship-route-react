import { Line } from "nivo";
import { dataCreate } from "./chartHelper";

export function Chart(props) {
  console.log(props);
  let lib = "nivo";
  let data = dataCreate(props, lib);
  let nivoData = [
    {
      id: "52n",
      data: data,
    },
  ];

  return (
    <div>
      <Line
        data={nivoData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
        }}
      />
    </div>
  );
}
