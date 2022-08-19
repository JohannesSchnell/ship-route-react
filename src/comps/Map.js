import { React, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Polyline,
} from "react-leaflet";
import L, { Class } from "leaflet";
import "leaflet/dist/leaflet.css";

import { getPoints } from "./helper.js";

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
  console.log("map props", props);
  const points = getPoints(props);
  console.log(points[100]);

  //const map = useMap();

  return (
    <div>
      <div>
        <MapContainer
          center={[119.897666666667, 32.1251666666667]}
          zoom={2}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; 
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
          // key={props.app_data[props.dateIndex][props.var_key.map_key]}
          // position={points[props.dateIndex]}
          // icon={shipIcon}
          />

          <Polyline positions={points} color="red" />
        </MapContainer>
      </div>
    </div>
  );
}
