import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/styles.css";

import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";
import profiles from "../mockData/profiles.json";


const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery)
  );

  
  const noResults = filteredProfiles.length === 0 && searchQuery.length > 0;

  return (
    <div>
      <header style={{ textAlign: "center", margin: "1rem 0" }}>
        <h1>Profile Map Application</h1>
      </header>
      <nav style={{ marginBottom: "1rem", textAlign: "center" }}>
        <ul
          style={{
            listStyle: "none",
            display: "inline-flex",
            gap: "1rem",
            padding: "0",
            margin: "0",
          }}
        >
          <li>
            <Link to="/admin">
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Admin Page
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-details">
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Profile Details
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "0.5rem",
            width: "100%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      
      {noResults && (
        <div style={{ textAlign: "center", color: "red" }}>
          <h3>No profiles found matching "{searchQuery}"</h3>
        </div>
      )}

      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>

      
      {selectedProfile && (
        <>
          <h3>Location for {selectedProfile.name}</h3>
          <MapComponent
            latitude={selectedProfile?.address?.lat}
            longitude={selectedProfile?.address?.lng}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
