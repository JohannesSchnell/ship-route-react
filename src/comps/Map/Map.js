import React from "react";
import { MapContainer, Marker } from "react-leaflet";
import L, { Class } from "leaflet";

import "leaflet/dist/leaflet.css";

import {
  getPoints,
  RecenterAutomatically,
  PolyLine,
  Tilelayer,
  shipIcon,
} from "./mapHelper.js";

import { useSelector } from "react-redux";

export function Map(props) {
  const dateIndex = useSelector((state) => state.index.value);

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const points = getPoints(props);

  return (
    <div>
      <div>
        <MapContainer
          center={points[dateIndex]}
          zoom={2}
          scrollWheelZoom={true}
        >
          <Tilelayer />
          <Marker position={points[dateIndex]} icon={shipIcon} />
          <RecenterAutomatically position={points[dateIndex]} />
          <PolyLine points={points} />
        </MapContainer>
      </div>
    </div>
  );
}
