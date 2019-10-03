import React from "react";

import "./Datepicker.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Datepicker = () => {
  return (
    <div className="datepicker-component">
      <h2>Datepicker Component</h2>
      <input type="date" className="datepicker" />
    </div>
  );
};

export default Datepicker;
