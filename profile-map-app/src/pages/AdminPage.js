import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/styles.css";

import { profiles as initialProfiles } from "../mockData/profiles";

const AdminPage = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: { lat: 0, lng: 0 },
  });
  const [successMessage, setSuccessMessage] = useState("");

  const addProfile = () => {
    if (!newProfile.name || !newProfile.photo || !newProfile.description) {
      alert("Please fill all the fields!");
      return;
    }
    const profileWithId = { ...newProfile, id: Date.now() };
    setProfiles([...profiles, profileWithId]);
    setNewProfile({ name: "", photo: "", description: "", address: { lat: 0, lng: 0 } });
    setSuccessMessage("Profile added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const deleteProfile = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      setProfiles(profiles.filter((profile) => profile.id !== id));
      setSuccessMessage("Profile deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Admin Dashboard</h1>

      {/* Success Message */}
      {successMessage && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "0.5rem",
            borderRadius: "4px",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {successMessage}
        </div>
      )}

      {/* Add Profile Form and Navigation */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h3>Add New Profile</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleInputChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={handleInputChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProfile.description}
          onChange={handleInputChange}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
          <button
            onClick={addProfile}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Profile
          </button>

          {/* Home Page Button */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Home Page
            </button>
          </Link>
        </div>
      </div>

      {/* Profiles List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
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
            <button
              onClick={() => deleteProfile(profile.id)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
