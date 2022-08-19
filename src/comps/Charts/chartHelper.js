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

export function subSample(
  data,
  size,
  dateboi,
  date_key,
  var_key,
  lat_key,
  lon_key
) {
  let plotArr = [];
  let latlng = [];
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

    plotArr.push({
      x: d3.timeParse(dateboi)(data[i][date_key]),
      y: avg(subSet.map((item) => item[var_key])),
    });

    latlng.push({
      lat: data[i][lat_key],
      lng: data[i][lon_key],
    });
  }
  return {
    plotData: plotArr,
    mapData: latlng,
  };
}
