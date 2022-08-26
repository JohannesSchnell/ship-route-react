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
import { index } from "d3";

//
//https://react-leaflet.js.org/docs/api-map/#usemapevent
//

const RecenterAutomatically = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
  }, [position]);
  return null;
};

function getIndexByDist({ pointArray }, point) {
  console.log({ pointArray });
  const distArray = [];
  for (let i = 0; i < pointArray.length; i++) {
    const dist = Math.sqrt(
      (pointArray[i].lat - point.lat) ** 2 +
        (pointArray[i].lng - point.lng) ** 2
    );

    distArray.push(dist);
  }
  console.log(distArray);
  const index = distArray.indexOf(Math.min(...distArray));
  return index;
}

function ReturnIndex(pointArray) {
  const map = useMapEvent("click", (e) => {
    console.log(getIndexByDist(pointArray, e.latlng));
  });
}

export function Map(props) {
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
  const points = getPoints(props.mapData);
  //console.log(points);

  //const map = useMap();
  //console.log(points[props.dateIndex]);
  return (
    <div>
      <div>
        <MapContainer
          center={points[props.dateIndex]}
          zoom={2}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={points[props.dateIndex]} icon={shipIcon} />
          <RecenterAutomatically position={points[props.dateIndex]} />

          <Polyline
            positions={points}
            color="red"
            eventHandlers={{
              click: (e) => {
                console.log(e);
                const index = getIndexByDist(e.target._latlngs, e.latlng);
                console.log(index);
              },
            }}
          />
          <ReturnIndex pointArray={points} />
        </MapContainer>
      </div>
    </div>
  );
}
