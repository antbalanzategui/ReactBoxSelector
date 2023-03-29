/**
 * Antonio Balanzategui, 2/25/2023
 *
 */
import React, { useState } from "react";
import Input from "./Input";
import Box from "./Box";
import GridForBoxes from "./GridForBoxes";
import SelectionInfo from "./SelectionInfo";
import "./App.css";

/**
 * Main App.js "Component"
 *
 * @returns {JSX.Element}
 * Entire App
 *
 * @constructor
 */
function App() {
    const [val, setVal] = useState("");
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    const boxes = [];
    /**
     * Fills previous box array with box components
     */
    for (let i = 0; i < val; i++) {
        const isSelected = selectedBoxes.includes(i);
        boxes.push(
            <Box classname = "box" boxNumber={i + 1} key={i + 1} onClick={() => handleBoxClick(i + 1)} isSelected={isSelected} />
        );
    }

    /**
     * Handles a box click and updates multiple components properly
     *
     * @param boxIndex
     */
    function handleBoxClick(boxIndex) {
        const newSelectedBoxes = [...selectedBoxes];
        if (newSelectedBoxes.includes(boxIndex - 1)) {
            newSelectedBoxes.splice(newSelectedBoxes.indexOf(boxIndex - 1), 1);
        } else {
            newSelectedBoxes.push(boxIndex - 1);
        }
        setSelectedBoxes(newSelectedBoxes);
    }

    /**
     * Function to ensure that
     * selectedBoxes is set to an empty list
     * so that the text area does not display a box as select
     * when there are no such box on that screen
     * @param value
     */
    function handleInputChange(value) {
        setVal(value);
        setSelectedBoxes([]);
    }
    return (
        <div className = "App">
            <Input value={val} onChange={handleInputChange} />
            <SelectionInfo selectedBoxes={selectedBoxes} />
            <div className = "grid-container">
            <GridForBoxes>{boxes}</GridForBoxes>
            </div>
        </div>
    );
}
export default App;

