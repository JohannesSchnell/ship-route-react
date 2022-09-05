import { React, useState, useEffect } from "react";

export function Slider(props) {
  const [dateIndex, setdateIndex] = useState(
    Math.floor(props.app_data.length / 2)
  );

  return (
    <div className="dateslider">
      <input
        type="range"
        min={0}
        max={props.app_data.length - 1}
        value={props.dateIndex}
        className="slider"
        id="dateSlider"
        onChange={(e) => setdateIndex(e.target.value)}
      ></input>
    </div>
  );
}
