import React, { useState } from "react";
import { NotesList } from "./NotesList";
import { nanoid } from "nanoid";
import "./NoteApp.css";

export const NotesApp = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "09/01/2025",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "09/01/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "09/01/2026",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "20/04/2025",
    },
    {
      id: nanoid(),
      text: "This is my NEW note!",
      date: "xx/xx/2025",
    },
  ]);

  const addNote = (text) => {

  }

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};
