import React, { useState } from "react";
import "./NoteApp.css";

export const AddNotes = () => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    // the setNoteText will change everytime new text get inputed
    setNoteText(event.targer.value);
  }

  const handleSaveClick = () => {
    
  }
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};
