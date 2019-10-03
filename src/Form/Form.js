import React from "react";
import PropTypes from "prop-types";
import "./Form.css"

const Form = props => {
  return (
    <div>
      <h2>Form Component</h2>
      
      <form className="form-style">
        {props.fields.map((Field, index) => (
          <Field key={index} />
        ))}
      </form>
      <div className="space"/>
    </div>
  );
};

Form.propTypes = {
  fields: PropTypes.array.isRequired
};

export default Form;
