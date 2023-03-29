/**
 * Antonio Balanzategui, 2/23/2023
 *
 */
import React from "react";
import "./Input.css";

/**
 * Input Component
 *
 * @param value
 * value of Input
 *
 * @param onChange
 * onChange
 *
 * @returns {JSX.Element}
 * Input Component
 *
 * @constructor
 */
function Input({value, onChange}) {
    const handleChange = (e) => {
        /**
         * Used to ensure the input is numerical
         * @type {RegExp}
         */
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            onChange(e.target.value);
        }
    };
    return (
        <div className = "inputHolder">
            <input
                placeholder="Number of Boxes"
                type="number"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
export default Input;
