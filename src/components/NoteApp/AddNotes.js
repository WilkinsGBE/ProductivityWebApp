import React, { useState } from "react";
import "./NoteApp.css";

export const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      // the setNoteText will change everytime new text get inputed
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    //check if the note is empty
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText(""); //reset the textarea
    }
  };

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
        <small>{characterLimit - noteText.length} characters remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
