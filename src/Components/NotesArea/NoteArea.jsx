import React, { useEffect, useState } from "react";
import styles from "./NoteArea.module.scss";
import GroupName from "../GroupSetup/GroupName";
import BackArrow from "../../assets/BackArrow";
import NoteCard from "./NoteCard";
import InputArea from "./InputArea";
import { useParams, Link } from "react-router-dom";
import { useWidth } from "../Setting/WidthContext";

function NoteArea() {
  // State to manage notes, selected group, and group error
  const [notes, setNotes] = useState([]);
  const [group, setGroup] = useState(null);
  const [groupError, setGroupError] = useState(false);

  // Get the groupId from the URL params
  const { groupId } = useParams();

  // Get the screen width using a custom hook
  const screenWidth = useWidth();

  // Fetch group and notes data from localStorage on component mount or groupId change
  useEffect(() => {
    setGroupError(false);

    // Find the group in localStorage based on groupId
    const groupFound = JSON.parse(localStorage.getItem("groups")).find(
      (group) => group.groupId === groupId
    );

    // Retrieve notes from localStorage based on groupId
    const notes = JSON.parse(localStorage.getItem(groupId));

    // Update state with group and notes data
    if (groupFound) setGroup(groupFound);
    else setGroupError(true);

    if (notes) setNotes(notes);
    else setNotes([]);
  }, [groupId]);

  // Function to add a new note
  const addNote = (note) => {
    // Update notes state and localStorage with the new note
    setNotes((prev) => [...prev, note]);
    localStorage.setItem(groupId, JSON.stringify([...notes, note]));
  };

  // Render the component
  return (
    <>
      {!groupError ? (
        // Check if group exists and render the notes area
        group && (
          <div className={styles.notesArea}>
            <div className={styles.groupNameBar}>
              {/* Render BackArrow as a link to the home page when screen width is less than 675 */}
              {screenWidth < 675 && (
                <Link to={"/"}>
                  <BackArrow />
                </Link>
              )}
              {/* Render the GroupName component with the selected group's details */}
              <GroupName
                groupName={group.groupName}
                bgColor={group.bgColor}
                fontColor="#FFF"
              />
            </div>

            {/* Render the list of NoteCard components based on the notes state */}
            <div className={styles.notesContainer}>
              {notes.map((note, index) => (
                <NoteCard
                  key={index}
                  content={note.content}
                  date={note.date}
                  time={note.time}
                />
              ))}
            </div>

            {/* Render the InputArea component to add new notes */}
            <InputArea addNote={addNote} />
          </div>
        )
      ) : (
        // Render an error message if the group is not found
        <div className={`${styles.notesArea} ${styles.groupError}`}>
          <h1>Group Not Found!</h1>
        </div>
      )}
    </>
  );
}
// Export the component
export default NoteArea;
