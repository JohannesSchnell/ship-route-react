import L, { Class } from "leaflet";
import * as d3 from "d3";

function just_every(n, data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (i % n == 0) {
      arr.push(data[i]);
    }
  }
  return arr;
}

export function iterateOverJSON(features) {
  let arr = [];
  for (let i = 0; i < features.length; i++) {
    arr.push(features[i].properties);
  }
  return arr;
}

export function makeData(app_data, key) {
  let arr = [];
  for (let i = 0; i < app_data.length; i++) {
    arr.push(app_data[i][key]);
  }
  return arr;
}

export function getPoints(features) {
  let points = [];
  for (let ele in features) {
    points.push(L.latLng(features[ele].lat, features[ele].lng));
  }
  return points;
}

export function keys(x) {
  if (x === 1) {
    return {
      date_key: "day_time",
      var1_key: "wind",
      var2_key: "wind_dir",

      map_key: "field_1",
      lat_key: "lat",
      lon_key: "lon",
    };
  }
  if (x === 2) {
    return {
      date_key: "Date.Time..UTC.",
      var1_key: "Temp..wash.water.EGC.Tower.inlet",
      var2_key: "Load.E3",

      map_key: "field_1",
      lat_key: "Longitude",
      lon_key: "Latitude",
    };
  }
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
