// Importing necessary dependencies and styles
import React, { useState } from "react";
import styles from "./InputArea.module.scss"; 
import Send from "../../assets/Send";

// Functional component for the input area
export default function InputArea({ addNote }) {
  // State hook to manage the input value
  const [note, setNote] = useState("");

  // Function to handle the submission of a new note
  const handleSubmitNote = () => {
    // Getting the current date
    const today = new Date();

    // Creating a new note object with content, date, and time
    const newNote = {
      content: note,
      date:
        today.toLocaleDateString("en-US", { day: "numeric" }) +
        " " +
        today.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    // Calling the addNote function passed as a prop with the new note
    addNote(newNote);

    // Clearing the input field after submission
    setNote("");
  };

  // Rendering the input area with a text area and a send button
  return (
    <div className={styles.inputArea}>
      <div className={styles.inputContainer}>
        {/* Text area for entering the note content */}
        <textarea
          name="note"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your text here......"
        />

        {/* Send button to submit the note */}
        <div
          className={styles.saveButton}
          style={{ pointerEvents: note.length > 0 ? "auto" : "none" }}
          onClick={handleSubmitNote}
        >
          {/* Send component or image with a disabled state based on note length */}
          <Send disabled={!(note.length > 0)} />
        </div>
      </div>
    </div>
  );
}
