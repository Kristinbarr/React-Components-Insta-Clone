// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import logo from "../../assets/ig-logo.png"

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x logo-image" />
        <img src={logo} alt='instagram' className="logo-title" />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
