// Import React
import React from 'react';

// Define the Send component with a default prop 'disabled' set to true
export default function Send({
    disabled = true,  // Prop to determine if the Send button is disabled
}) {
    // Return JSX for the Send button with an SVG icon
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29" fill="none">
            {/* Path for the arrow icon, color based on 'disabled' prop */}
            <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill={disabled ? "#ABABAB" : "#001F8B"} />
        </svg>
    );
}
