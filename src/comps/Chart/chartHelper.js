import * as d3 from "d3";

export function dataCreate(props, lib) {
  return props.app_data.map((item) => {
    //carl: 31.03.2020 11:21
    let dateboi = "%d.%m.%Y %H:%M";
    //somali: 2022-04-17
    //let dateboi = "%Y-%m-%d";

    if (lib === "d3") {
      return {
        x: d3.timeParse(dateboi)(item[props.var_key.date_key]),
        y: item[props.var_key.var1_key],
      };
    } else {
      return {
        x: item[props.var_key.date_key],
        y: item[props.var_key.var1_key],
      };
    }
  });
}
