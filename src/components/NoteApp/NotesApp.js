import React, { useState } from "react";
import { NotesList } from "./NotesList";
import { nanoid } from "nanoid";
import "./NoteApp.css";
import { Search } from "./Search";
import { Header } from "./Header";

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
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    // the background will change depending on this
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(
            (note) =>
              // this will return only the note that are equal to what is in the search bar
              note.text.toLowerCase().includes(searchText.trim().toLowerCase()) // Normalize searchText by trimming and converting to lowercase
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
