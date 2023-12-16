// Importing necessary React hooks and components
import { useEffect, useState } from 'react';
import WidthContext from './WidthContext';

// Creating a context provider component for screen width
const WidthProvider = ({ children }) => {
    // State to store the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Effect to update the screen width when the window is resized
    useEffect(() => {
        // Event listener to update screen width on window resize
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Adding the event listener to the window
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []); // The empty dependency array ensures that the effect runs only once during component mount

    // Rendering the WidthContext provider with the current screen width as value
    return (
        <WidthContext value={screenWidth}>
            {children}
        </WidthContext>
    );
}

// Exporting the WidthProvider component
export default WidthProvider;
