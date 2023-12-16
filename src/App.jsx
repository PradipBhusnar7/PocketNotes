// Importing necessary modules from React and react-router-dom
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing component pages and custom hook
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import { useWidth } from "./Components/Setting/WidthContext";

// Importing styles for the app
import "./App.css";

// Main component function
function App() {
  // Using a custom hook to get the screen width
  const screenWidth = useWidth();

  // Checking if the screen width falls within a specific range
  if (screenWidth >= 675 && screenWidth < 1085) {
    // Displaying an error message if the screen size is not supported
    return (
      <div className="screen-error">
        Pocket Notes is not available for this screen size.
      </div>
    );
  }

  // Rendering the main content if the screen size is supported
  return (
    <Routes>
      {/* Defining a route for the home page */}
      <Route path="/" element={<Home/>} />

      {/* Defining a route for the NotesPage with a dynamic parameter */}
      <Route path="/NotesPage/:groupId" element={<Notes/>} />
    </Routes>
  );
}
// Exporting the App component as the default export
export default App;
