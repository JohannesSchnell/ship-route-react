import L, { Class } from "leaflet";

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
  /*   for (let i = 0; i < features.length; i++) {
    let feature = features[i];
    points.push(
      L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    );
  } */
  console.log("features : ", features["3"].lat);
  for (let ele in features) {
    //console.log("ele", ele);
    points.push(L.latLng(features[ele].lat, features[ele].lng));
  }
  console.log("points", points);
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
