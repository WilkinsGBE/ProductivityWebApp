import React from "react";
import { Note } from "./Note";
import { AddNotes } from "./AddNotes";
import "./NoteApp.css";

export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div>
      <div className="notes-list">
        {/* Displaying all the notes dynamically (based on the number of notes) */}
        {notes.map((note) => (
          <Note
            key={note.id} // Added key prop
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNotes handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};
