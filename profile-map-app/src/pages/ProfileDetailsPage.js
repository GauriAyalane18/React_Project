import React, { useState } from "react";
import { Link } from "react-router-dom";
import profiles from "../mockData/profiles.json";
import MapComponent from "../components/MapComponent"; 
const ProfileDetailsPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Profile Details</h1>
      <p>detailed information about individual profiles below.</p>

      
      <div style={{ marginBottom: "2rem" }}>
        <Link to="/">
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>

      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "250px",
              textAlign: "center",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => handleProfileClick(profile)}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 2px 4px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={profile.photo}
              alt={profile.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
                marginBottom: "0.5rem",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {profile.name}
            </h3>
            <p style={{ marginBottom: "0.5rem", color: "#666" }}>
              {profile.description}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#999" }}>
              Latitude: {profile.address.lat}, Longitude: {profile.address.lng}
            </p>
          </div>
        ))}
      </div>

      
      {selectedProfile && (
        <div
          style={{
            marginTop: "2rem",
            padding: "2rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{selectedProfile.name}</h2>
          <p>{selectedProfile.description}</p>
          <div style={{ marginBottom: "1rem" }}>
            <h4>Location:</h4>
            <MapComponent
              latitude={selectedProfile.address.lat}
              longitude={selectedProfile.address.lng}
            />
          </div>

          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedProfile(null)}
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetailsPage;
