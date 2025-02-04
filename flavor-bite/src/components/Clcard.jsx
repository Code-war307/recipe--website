import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Import prop-types for validation
import "./Clcard.css";

const Clcard = ({ category }) => {
  if (!category) {
    return null; // Prevent rendering if no category is passed
  }

  return (
    <NavLink to={`/meal/${category.strCategory}`}> {/* Fixed the link format */}
      <div className="cont">
        <div className="img-text">
          {/* Safely access category properties */}
          <img
            src={category.strCategoryThumb}
            alt={`${category.strCategory} thumbnail`}
          />
          <h2>{category.strCategory}</h2>
        </div>
      </div>
    </NavLink>
  );
};

// Validate props
Clcard.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
  }),
};

export default Clcard;
