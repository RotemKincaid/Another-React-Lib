import React from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";
const Dropdown = ({
  btnText = "Menu",
  menuItems = [],
  onItemClick = () => {}
}) => {
  return (
    <div className="dropdown">
      <h2>Dropdown Component</h2>
      <button className="dropbtn">{btnText}</button>
      <div className="dropdown-menu">
        {menuItems.map((item, index) => {
          return (
            <p key={index} className="item" onClick={() => onItemClick(item)}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="space"/>
    </div>
  );
};

Dropdown.propTypes = {
  btnText: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
};

export default Dropdown;
