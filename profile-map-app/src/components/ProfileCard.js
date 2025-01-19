import React from "react";
import "../styles/styles.css";


const ProfileCard = ({ profile, onSummaryClick, isActive }) => {
  return (
    <div className={`profile-card ${isActive ? "active" : ""}`}>
      <img
        src={profile.image}
        alt={profile.name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
