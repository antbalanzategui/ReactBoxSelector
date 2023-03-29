/**
 * Antonio Balanzategui, 2/23/2023
 *
 */
import React from "react";
import "./Box.css";

/**
 * React function component to receive a box
 *
 * @param boxNumber
 * Number of Box
 *
 * @param onClick
 * OnClick
 *
 * @param isSelected
 * Selection status
 *
 * @returns {JSX.Element}
 * Box Component
 *
 * @constructor
 */
function Box({boxNumber, onClick, isSelected}) {
    const classNames = [];
    let boxColorClassname;
    if (isSelected) {
        classNames.push("selected");
    }
    /**
     * Function to get the boxText,
     * used to fill each box component with
     * their box number
     *
     * @param boxNumber
     * number of box
     *
     * @returns {string}
     * "Box Number: ", boxNumber
     */
    function getBoxText(boxNumber) {
        let boxString = "Box: "+boxNumber;
        return boxString;
    }

    /**
     * Function to determine the boxes color,
     * as per assignment details,
     *
     * @param boxNumber
     * number of box
     *
     * @returns {string}
     * "boxPrime" if the number is prime
     * "boxEven" if the number is even
     * "boxOdd" if the number is odd
     */
    function determineBoxColor(boxNumber) {
        if (boxNumber == 1) {
            return "boxOdd"
        }
        else if (boxNumber === 2) {
            return "boxPrime";
        }
        else if (boxNumber % 2 === 0) {
            return "boxEven";
        }
        else {
            for (let i = 2; i < boxNumber; i++) {
                if (boxNumber % i === 0) {
                    return "boxOdd";
                }
            }
            return "boxPrime";
        }
    }
    boxColorClassname = determineBoxColor(boxNumber);
    classNames.push(boxColorClassname);
    let boxString = getBoxText(boxNumber);
    return <div className={classNames.join(" ")} onClick={onClick}>{boxString}</div>;
}
export default Box;

