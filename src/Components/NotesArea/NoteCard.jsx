// Import the React library and the styles module for the NoteCard component
import React from "react";
import styles from "./NoteCard.module.scss";

// Define the NoteCard component as a functional component that takes props (content, date, time)
export default function NoteCard({ content, date, time }) {
  return (
    // Outer div with a className using styles from the imported module
    <div className={styles.notesCard}>
      {/* Paragraph element to display the content prop */}
      <p>{content}</p>

      {/* Nested div with a className for date and time information */}
      <div className={styles.dateTime}>
        {/* Paragraph element to display the date and time props */}
        <p>
          {date}&nbsp; <span>&#8226;</span> &nbsp;{time}
        </p>
      </div>
    </div>
  );
}
