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
  var_keys,
  lat_key,
  lon_key
) {
  let plotArr = [];
  let plotObj = {};
  let latlng = [];
  let dateArr = [];

  function avg(x) {
    let res = 0;
    for (let i = 0; i < x.length; i++) {
      res += x[i];
    }
    return res / x.length;
  }

  let wing = Math.floor(size / 2);
  for (let varX of var_keys) {
    for (let i = wing; i < data.length - wing; i += wing + 1) {
      let subSet = data.slice(i - wing, i + wing);
      plotArr.push(avg(subSet.map((item) => item[varX])));
    }
    plotObj[varX] = plotArr;
    plotArr = [];
    //console.log("ss", plotObj, wing);
  }

  for (let i = wing; i < data.length - wing; i += wing + 1) {
    latlng.push({
      lat: data[i][lat_key],
      lng: data[i][lon_key],
    });
  }
  //console.log(latlng);

  for (let i = wing; i < data.length - wing; i += wing + 1) {
    dateArr.push(d3.timeParse(dateboi)(data[i][date_key]));
  }
  //console.log(dateArr);

  return {
    mapData: latlng,
    dateData: dateArr,
    varData: plotObj,
  };
}
