import React from "react";
import { Note } from "./Note";
import { AddNotes } from "./AddNotes";
import "./NoteApp.css";

export const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div>
      <div className="notes-list">
        {/* Displaying all the notes dynamically (based on the number of notes) */}
        {notes.map((note) => (
          <Note id={note.id} text={note.text} date={note.date} />
        ))}
        <AddNotes handleAddNote={handleAddNote}/>
      </div>
    </div>
  );
};
