import React, { useEffect, useState } from "react";
import GroupArea from "../GroupSetup/NotesGroups";
import CreateGroups from "../CreateGroups/CreateGroups";
import styles from "./Collection.module.scss";

function Collection({ children }) {
  // State to manage the list of groups
  const [groups, setGroups] = useState([]);
  // State to control the visibility of the "Create Groups" component
  const [showCreateGroups, setShowCreateGroups] = useState(false);

  // useEffect to load groups from localStorage on component mount
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups && storedGroups.length > 0) setGroups(storedGroups);
  }, []);

  // Function to add a new group to the list
  const addGroup = (newGroup) => {
    setGroups((prev) => [...prev, newGroup]);
    // Update localStorage with the updated list of groups
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    // Hide the "Create Groups" component after adding a group
    setShowCreateGroups(false);
  };

  return (
    <div className={styles.collectionContainer}>
      {/* Display the list of groups and provide a callback to open "Create Groups" */}
      <GroupArea
        groups={groups}
        openGroupCreate={() => setShowCreateGroups(true)}
      />

      {/* Render children components */}
      {children}

      {/* Conditionally render the "Create Groups" component */}
      {showCreateGroups && (
        <div
          className={styles.createGroups}
          // Hide the "Create Groups" component when clicked
          onClick={() => setShowCreateGroups(false)}
        >
          {/* Pass the list of groups and the addGroup function to the "Create Groups" component */}
          <CreateGroups groups={groups} addGroup={addGroup} />
        </div>
      )}
    </div>
  );
}
export default Collection;
