import React from "react";

import PropTypes from "prop-types";
import "./Searchbar.css"

const Searchbar = ({
  onChange = () => {},
  onSubmit = () => {},
  value = "",
  ...rest
}) => {
  return (
    <div className="form-container searchbar">
      <h2>Search Bar Component</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} {...rest} />
        <button type="submit">Search</button>
      </form>
      <div className="space"/>
    </div>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default Searchbar;
