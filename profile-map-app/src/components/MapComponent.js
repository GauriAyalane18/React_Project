import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: latitude || 0,
    lng: longitude || 0,
  };

  if (!latitude || !longitude) {
    return <div>Invalid location data</div>;
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9At_HabV2J9SSGhQWP2hw8YejPnXjjaA">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
