import React from "react";
import { Note } from "./Note";
import "./NoteApp.css";

export const NotesList = () => {
  return (
    <div >
        <div className="notes-list">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>  
    </div>

  );
};
