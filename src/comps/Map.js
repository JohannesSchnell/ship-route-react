import { React, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Polyline,
  useMapEvent,
} from "react-leaflet";
import L, { Class } from "leaflet";
import { closest } from "leaflet-geometryutil";
import "leaflet/dist/leaflet.css";

import { getPoints } from "./helper.js";
import { dispatch, index } from "d3";

import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../state/indexSlice.js";

//
//https://react-leaflet.js.org/docs/api-map/#usemapevent
//

const i = 500;

const RecenterAutomatically = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
  }, [position]);
  return null;
};

//adjust {} for using in Return index(click somewhere except the polyline)
//or within PolyLine for a click on the line
function getIndexByDist(pointArray, point) {
  //console.log({ pointArray });
  const distArray = [];
  for (let i = 0; i < pointArray.length; i++) {
    const dist = Math.sqrt(
      (pointArray[i].lat - point.lat) ** 2 +
        (pointArray[i].lng - point.lng) ** 2
    );

    distArray.push(dist);
  }
  //console.log(distArray);
  const index = distArray.indexOf(Math.min(...distArray));
  console.log(index);
  return index;
}

function ReturnIndex(pointArray) {
  const map = useMapEvent("click", (e) => {
    dispatch(updateState(Number(getIndexByDist(pointArray, e.latlng))));
    console.log(getIndexByDist(pointArray, e.latlng));
  });
}

export function Map(props) {
  //console.log(props);

  const dateIndex = useSelector((state) => state.index.value);
  const dispatch = useDispatch();

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  /*   console.log("MAP");*/
  //console.log(props);
  const shipIcon = L.icon({
    iconUrl: "../ship.svg",
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
  });
  //console.log("map props", props);
  const points = getPoints(props);
  //console.log(points);

  //const map = useMap();
  //console.log(points[props.dateIndex]);
  return (
    <div>
      <div>
        <MapContainer
          center={points[dateIndex]}
          zoom={2}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={points[dateIndex]} icon={shipIcon} />
          <RecenterAutomatically position={points[dateIndex]} />

          <Polyline
            positions={points}
            color="red"
            eventHandlers={{
              click: (e) => {
                dispatch(
                  updateState(
                    Number(getIndexByDist(e.target._latlngs, e.latlng))
                  )
                );
                console.log(e);
                const index = getIndexByDist(e.target._latlngs, e.latlng);
                console.log(index);
              },
            }}
          />
          {/* <ReturnIndex pointArray={points} /> */}
        </MapContainer>
      </div>
    </div>
  );
}
