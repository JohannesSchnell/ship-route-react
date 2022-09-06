import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateState, incState, decState } from "../state/indexSlice";

import useKeypress from "react-use-keypress";

export function Control(props) {
  const dateIndex = useSelector((state) => state.index.value);
  const dispatch = useDispatch();

  useKeypress(["j", "l"], (e) => {
    if (e.key === "j") {
      dispatch(decState());
    }
    if (e.key === "l") {
      dispatch(incState());
    }
  });
}
