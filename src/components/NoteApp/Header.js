import React, { useState } from "react";
import "./NoteApp.css";

export const Header = ({ handleToggleDarkMode }) => {
  const [toggleMode, setToggleMode] = useState("white");

  const toggleTheme = () => {
    //this will toggle the mode between black or white
    setToggleMode((prevMode) => (prevMode === "white" ? "black" : "white"));

    handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={toggleTheme} className="toggle">
        {toggleMode === "white" ? "Black Mode" : "White Mode"}
      </button>
    </div>
  );
};
