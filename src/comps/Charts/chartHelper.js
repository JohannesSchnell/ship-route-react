import * as d3 from "d3";

export function dataCreate(props, lib) {
  //console.log(props);

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

export function subSample(data, size) {
  let arr = [];
  function avg(x) {
    let res = 0;
    for (let i = 0; i < x.length; i++) {
      res += x[i];
    }
    return res / x.length;
  }
  let wing = Math.floor(size / 2);
  for (let i = wing; i < data.length - wing; i += wing + 1) {
    let subSet = data.slice(i - wing, i + wing);

    arr.push({
      x: data[i].x,
      //lat: data[i].lat,
      //lng: data[i].lon,
      y: avg(subSet.map((item) => item.y)),
    });
  }
  return arr;
}
