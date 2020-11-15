import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search mb-1 p-1"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;