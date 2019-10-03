import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css"

/**
 * Simple checkbox component
 * Render a checkbox
 * E.g.:
 * ```html
 *  <Checkbox options={options} onClick={handleChange} title="Animals"></Checkbox>
 * ```
 */
const Checkbox = ({
    title = '',
    options = [],
    onItemClick = () => { }
}) => {
    return (
        <div>

            <div className="checkbox-title">
                <label ><b>{title} :</b></label>
            </div>

            <form>
                {options.map((value, index) => {
                    return (
                        <div>
                            <label class="container"> {value.label}
                                <input type="checkbox" id={value.id} name="checkbox" onClick={() => onItemClick(item.id)} className=".regular-checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    );
                })}
            </form>
            <div className="space"/>
        </div>
    );
};

Checkbox.propTpes = {
    options: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
};
export default Checkbox;