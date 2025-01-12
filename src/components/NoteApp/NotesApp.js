import React, { useState, useEffect } from "react";
import { NotesList } from "./NotesList";
import { nanoid } from "nanoid";
import "./NoteApp.css";
import { Search } from "./Search";
import { Header } from "./Header";

export const NotesApp = () => {
  // Retrieve notes from localStorage or use default notes
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("react-notes-app-data");
    return savedNotes ? JSON.parse(savedNotes) : [
      {
        id: nanoid(),
        text: "This is the example of a Note",
        date: "08/01/2025",
      }
    ];
  });

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className={`${darkMode ? "dark-mode": "light-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.trim().toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
