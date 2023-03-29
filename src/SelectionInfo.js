import React from "react";
import "./SelectionInfo.css";

function SelectionInfo({ selectedBoxes }) {
    function stringToArray(boxText) {
        let arrayOfString = boxText.split(", ").map(Number);
        return arrayOfString;
    }

    function arrayToString(arrayOfString) {
        let boxText = "";
        for (let i = 0; i < arrayOfString.length; i++) {
            arrayOfString[i] = arrayOfString[i] + 1
            boxText = boxText + arrayOfString[i].toString();
            if (i !== arrayOfString.length - 1) {
                boxText = boxText + ", ";
            }
        }
        return boxText;
    }


    let selectedBoxesText;
    if (selectedBoxes.length > 0) {
        selectedBoxesText = selectedBoxes.join(", ");
        console.log("SBT: " +selectedBoxesText)
        let arrOfString = stringToArray(selectedBoxesText);
        console.log("ARS: "+arrOfString);
        arrOfString.sort((a, b) => a - b);
        console.log("Post Sort: "+arrOfString);
        selectedBoxesText = arrayToString(arrOfString);
    }
    else {
        selectedBoxesText = "None";
    }
    return (
        <div className = "selectInfoHolder">
            <h2><pre> Selected Boxes:</pre></h2>
            <textarea value={selectedBoxesText} readOnly/>
        </div>
    );
}
export default SelectionInfo;
