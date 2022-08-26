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
import "leaflet/dist/leaflet.css";

import { getPoints } from "./helper.js";

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

function returnIndex({ points }) {
  const map = useMapEvent("click", (b) => {
    const mapIndex = L.GeometryUtil.closest(map, points, b);
    console.log(mapIndex);
  });
  return mapIndex;
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

          <Polyline positions={points} color="red" />
          <returnIndex points={points} />
        </MapContainer>
      </div>
    </div>
  );
}
