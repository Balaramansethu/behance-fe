import React, { useState, useEffect } from "react";
import "../NavigationComponent/NavigationComponent.css";
import "../NavigationComponent/FilterComponent.css";
import images from "../../data/data.js";

const NavigationComponent = ({ onSortChange, onSearchChange }) => {
  const [selectedSort, setSelectedSort] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredImages, setFilteredImages] = useState(images);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const filtered = images.filter((image) =>
        image.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);

      const uniqueAuthors = [...new Set(filtered.map((image) => image.author))];
      setSuggestions(uniqueAuthors);

      setNoDataFound(filtered.length === 0);
    } else {
      setFilteredImages(images);
      setSuggestions([]);
      setNoDataFound(false);
    }
  }, [searchTerm]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
    onSortChange(value);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearchChange(suggestion);
  };

  const handleCloseClick = () => {
    setSearchTerm("");
    setSuggestions([]);
    setFilteredImages(images);
    setNoDataFound(false);
    onSearchChange("");
  };

  return (
    <div className="whole-container">
      <div className="navigation-container">
        <div className="navigation-elements">
          <ul className="flex">
            <li className="img">
              <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR-OsxScVFxpl0JRp8z2XraQ11-4saV78-tehs1ItbQ&s"
                alt="Behance Logo"
              />
            </li>
            <li className="logo_page">
              <button className="element-btn">Explore</button>
            </li>
            <li className="logo_page">
              <button className="element-btn">Assets</button>
            </li>
            <li className="logo_page">
              <button className="element-btn">Jobs</button>
            </li>
            <li className="logo_page">
              <button className="behance-text">Behance </button>
            </li>
            <li className="logo_page">
              <button className="element-btn">Hire Freelancers</button>
            </li>
          </ul>
        </div>
        <div className="bell-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </div>

        <div className="navigation-elements">
          <button type="button" className="log-in-button">
            Log In
          </button>
          <button type="button" className="sign-up-button">
            Sign Up
          </button>
          <img
            className="adobe-image"
            src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg"
            alt="Adobe"
          />
          <a href="#" className="adobe">
            Adobe
          </a>
        </div>
      </div>
      <nav className="user-search-options">
        <button className="filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-sliders"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
            />
          </svg>
          Filter
        </button>
        <div className="search-bar-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search search-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            className="search-bar"
            type="text"
            placeholder="Search the creative world at work"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button className="close-button" onClick={handleCloseClick}>
              &times;
            </button>
          )}
          {suggestions.length > 0 && (
            <div className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="sort-container">
          <p className="sort-text">Sort</p>
          <div className="recommended-button">
            <select
              name="sort"
              className="sorting"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <option value="none">Recommended</option>
              <option value="likes">Most liked</option>
              <option value="views">Most viewed</option>
            </select>
          </div>
        </div>
      </nav>
      {noDataFound && (
        <p className="no-data-message">
          Sorry, we couldn’t find any results for this search.
        </p>
      )}
    </div>
  );
};

export default NavigationComponent;
