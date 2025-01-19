import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { profiles } from "../mockData/profiles"; // Import profiles data

const ProfileDetailsPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Profile Details</h1>
      <p>View detailed information about individual profiles below.</p>

      {/* Back to Home Button */}
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
    </div>
  );
};

export default ProfileDetailsPage;
