import React, { useState } from 'react'
import { NotesList } from './NotesList'
import { nanoid } from "nanoid"
import "./NoteApp.css"

export const NotesApp = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "09/01/2025"
  }]);

  return (
    <div className='container'>
      <NotesList />
    </div>
  )
}
