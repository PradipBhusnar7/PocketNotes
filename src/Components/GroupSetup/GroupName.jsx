import React from 'react';
import styles from './GroupName.module.scss';

// GroupName component takes props like groupName, bgColor, and fontColor
export default function GroupName({
    groupName,
    bgColor,
    fontColor = "#000", // Default font color is black
}) {
    // Splitting the groupName into an array of words
    const groupSplit = groupName.split(/[ ]+/);

    // Creating a short version of the group name with the first letters of the first and second words
    const groupShort = groupSplit[0].charAt(0).toUpperCase() + (groupSplit[1] ? groupSplit[1].charAt(0).toUpperCase() : "");

    return (
        <div className={styles.groupsNameBox}>
            {/* Displaying a colored box with the short version of the group name */}
            <div className={styles.groupPlate} style={{ backgroundColor: bgColor }}>
                {groupShort}
            </div>

            {/* Displaying the full group name as an h3 element with a customizable font color */}
            <h3 style={{ color: fontColor }}>{groupName}</h3>
        </div>
    );
}
