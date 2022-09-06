import { useEffect } from "react";
import L, { Class } from "leaflet";
import { useMap, Polyline, TileLayer } from "react-leaflet";

import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../state/indexSlice.js";

export const shipIcon = L.icon({
  iconUrl: "../ship.svg",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
});

export function getPoints(features) {
  let points = [];
  for (let ele in features) {
    points.push(L.latLng(features[ele].lat, features[ele].lng));
  }
  return points;
}

//adjust {} for using in Return index(click somewhere except the polyline)
//or within PolyLine for a click on the line
export function getIndexByDist(pointArray, point) {
  const distArray = [];
  for (let i = 0; i < pointArray.length; i++) {
    const dist = Math.sqrt(
      (pointArray[i].lat - point.lat) ** 2 +
        (pointArray[i].lng - point.lng) ** 2
    );
    distArray.push(dist);
  }
  const index = distArray.indexOf(Math.min(...distArray));
  console.log(index);
  return index;
}

export const RecenterAutomatically = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
  }, [position]);
  return null;
};

export function PolyLine({ points }) {
  const dateIndex = useSelector((state) => state.index.value);
  const dispatch = useDispatch();

  return (
    <Polyline
      positions={points}
      color="red"
      eventHandlers={{
        click: (e) => {
          dispatch(
            updateState(Number(getIndexByDist(e.target._latlngs, e.latlng)))
          );
        },
      }}
    />
  );
}

export function Tilelayer() {
  return (
    <TileLayer
      attribution='&copy; 
<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}
