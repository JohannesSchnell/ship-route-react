import L, { Class } from "leaflet";
import * as d3 from "d3";

export function iterateOverJSON(features) {
  let arr = [];
  for (let i = 0; i < features.length; i++) {
    arr.push(features[i].properties);
  }
  return arr;
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
  }

  for (let i = wing; i < data.length - wing; i += wing + 1) {
    latlng.push({
      lat: data[i][lat_key],
      lng: data[i][lon_key],
    });
  }

  for (let i = wing; i < data.length - wing; i += wing + 1) {
    dateArr.push(d3.timeParse(dateboi)(data[i][date_key]));
  }

  return {
    mapData: latlng,
    plotData: { dateData: dateArr, varData: plotObj },
  };
}
