import { React, useState } from "react";
import { Chart } from "../Charts/Chart";
import { Map } from "../Map.js";

export function State(props) {
  const [dateIndex, setdateIndex] = useState(
    Math.floor(props.dateData.length / 2)
  );

  return (
    <div>
      <Chart {...props} />
      <Map {...props.mapData} />
    </div>
  );
}

/* https://stackoverflow.com/questions/51433337/how-to-update-the-state-of-a-sibling-component-from-another-sibling-or-imported
https://reactjs.org/docs/lifting-state-up.html
https://stackoverflow.com/questions/47858242/dealing-with-nested-react-components-state-changes/47858356#47858356
https://react-redux.js.org/ */
