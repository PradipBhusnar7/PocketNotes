// Import necessary modules and components from React and other files
import React from 'react';
import styles from './NotesGroups.module.scss'; 
import GroupName from './GroupName';
import { Link } from 'react-router-dom'; 
import { useWidth } from '../Setting/WidthContext'; 
import { useParams } from 'react-router-dom'; 

// Define a style for the selected group
const selected = {
    backgroundColor: "rgba(47,47,47,0.17)",
    borderRadius: "1rem"
};

// Functional component for rendering the list of note groups
function NotesGroups({
    groups,
    openGroupCreate,
}) {
    // Get the "groupId" from the URL parameters
    const { groupId } = useParams();
    // Get the screen width using the "useWidth" hook
    const screenWidth = useWidth();

    return (
        // Main container for the note groups
        <div className={` ${styles.groupArea} ${groupId && screenWidth < 675 ? "remove" : ""}`}>
            {/* Heading section */}
            <div className={styles.heading}>
                <div>
                    <span>Pocket Notes</span>
                </div>
            </div>

            {/* Container for displaying the list of note groups */}
            <div className={styles.groupsContainer}>
                {/* Map through each group and render a Link to the corresponding NotesPage */}
                {groups?.map((group) => (
                    <div key={group.groupId} style={group.groupId === groupId ? selected : {}}>
                        <Link to={`/NotesPage/${group.groupId}`} replace={screenWidth < 675 ? false : true}>
                            <GroupName groupName={group.groupName} bgColor={group.bgColor} />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Button to add a new group */}
            <button className={styles.addGroupButton} title='Add Group' onClick={openGroupCreate}>+</button>
        </div>
    );
}

// Export the component as the default export
export default NotesGroups;
