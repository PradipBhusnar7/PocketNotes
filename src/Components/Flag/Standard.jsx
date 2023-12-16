import React from "react";
import flag from "../../assets/flag.png";
import Lock from "../../assets/Lock";
import styles from "./Standard.module.scss";
import { useWidth } from "../Setting/WidthContext";

function Standard() {
  // Get the screen width using a custom hook
  const screenWidth = useWidth();

  return (
    // Main container for the banner image
    <div
      className={`${styles.flag} ${screenWidth < 675 ? "remove" : ""}`}
    >
      {/* Container for the center content of the banner */}
      <div className={styles.middleNote}>
        {/* Display the flag image */}
        <img src={flag} alt="flag" />
        {/* Heading for the banner */}
        <h3>Pocket Notes</h3>
        {/* Description text for the banner */}
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      {/* Container for the encryption text */}
      <div className={styles.encryptedText}>
        {/* Display the lock icon and encryption text */}
        <span>
          <Lock /> end-to-end encrypted
        </span>
      </div>
    </div>
  );
}

export default Standard;
