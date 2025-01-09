import React, { useState } from "react";
import "./NoteApp.css";

export const Header = ({ handleToggleDarkMode }) => {
  const [toggleMode, setToggleMode] = useState("white");
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle"
      >
        {toggleMode} mode
      </button>
    </div>
  );
};
