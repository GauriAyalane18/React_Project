import React from "react";
import "../styles/styles.css";

const ProfileCard = ({ profile, onSummaryClick, isActive }) => {
  return (
    <div className={`profile-card ${isActive ? "active" : ""}`} style={{ padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
      {/* Removed image, no longer needed */}
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <p>{profile.address.line}</p>
      <button 
        onClick={() => onSummaryClick(profile)} 
        style={{
          padding: "0.5rem 1rem", 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "4px", 
          cursor: "pointer"
        }}>
        Summary
      </button>
    </div>
  );
};

export default ProfileCard;
