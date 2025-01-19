import React, { useState } from "react";
import "../styles/styles.css";


const SearchFilter = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
      />
    </div>
  );
};

export default SearchFilter;
