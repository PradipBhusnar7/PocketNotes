// Import necessary dependencies from React
import React, { useMemo, useState } from 'react';
import styles from './CreateGroups.module.scss';

// Predefined colors for the groups
const groupColors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

// Functional component for creating groups
function CreateGroups({
    groups,      // Array of existing groups
    addGroup,   // Function to add a new group
}) {
    // State variables to manage input fields and error messages
    const [groupName, setGroupName] = useState("");
    const [groupColor, setGroupColor] = useState("");
    const [nameError, setNameError] = useState("");
    const [colorError, setColorError] = useState(false);

    // Memoized array of groupIds from the existing groups
    const groupIds = useMemo(() => {
        return groups.map((group) => group.groupId);
    }, [groups]);

    // Function to transform a string into a slug format
    const slugTransform = (value) => {
        if (value && typeof value === "string") {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d]+/g, "-");
        }
    };

    // Event handler for changes in the group name input field
    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
        // Check if the transformed group name already exists
        !groupIds.includes(slugTransform(e.target.value))
            ? (nameError && setNameError(""))   // Reset name error if it was previously set
            : setNameError("Name already exists");  // Set name error if the name already exists
    };

    // Function to handle the submission of a new group
    const handleSubmitGroup = () => {
        let error = false;

        // Check if a group color is selected
        if (groupColor === "") {
            setColorError(true);
            error = true;
        }

        // Check if the group name is valid
        if (groupName.trim().length === 0) {
            setNameError("Name is invalid!");
            error = true;
        } else if (nameError) {
            error = true;
        }

        // If there are errors, do not proceed with group creation
        if (error) return;

        // Create a new group object with the provided information
        const newGroup = {
            groupName: groupName.trim(),
            groupId: slugTransform(groupName),
            bgColor: groupColor,
        };

        // Call the addGroup function to add the new group
        addGroup(newGroup);
    };

    // Render the component with input fields, color selection, and a create button
    return (
        <div className={styles.createContainer} onClick={(e) => e.stopPropagation()}>
            <h3>Create New Group</h3>
            <div className={styles.groupInput}>
                <label htmlFor="group-name">Group Name</label>
                <input
                    type="text"
                    name="groupName"
                    id="group-name"
                    value={groupName}
                    maxLength={16}
                    onChange={handleGroupNameChange}
                    placeholder="Enter group name"
                />
                {nameError && <p className={styles.error}>{nameError}</p>}
            </div>
            <div className={styles.groupInput}>
                <label>Choose Colour</label>
                <div className={styles.colorsList}>
                    {/* Map through predefined colors and create color selection boxes */}
                    {groupColors.map((color) => (
                        <div
                            key={color}
                            style={{ backgroundColor: color }}
                            className={color === groupColor ? styles.selected : ""}
                            onClick={() => setGroupColor(color)}
                        ></div>
                    ))}
                </div>
                {(colorError && !groupColor) && <p className={styles.error}>Colour not selected!</p>}
            </div>
            {/* Button to trigger the creation of a new group */}
            <button className={styles.createGroupButton} onClick={handleSubmitGroup}>
                Create
            </button>
        </div>
    );
}
// Export the CreateGroups component as the default export
export default CreateGroups;
