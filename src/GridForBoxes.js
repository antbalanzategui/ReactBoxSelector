/**
 * Antonio Balanzategui, 2/25/2023
 *
 */
import React from "react";
import "./GridForBoxes.css";

/**
 * Component Grid holding box components
 *
 * @param props
 * props in this case essentially refers to boxes children,
 * it is labeled as props to adhere to proper naming
 *
 * @returns {JSX.Element}
 * Grid Component filled with "X" number of boxes
 * @constructor
 */
function GridForBoxes(props) {
    return <div className="grid">{props.children}</div>;
}
export default GridForBoxes;
