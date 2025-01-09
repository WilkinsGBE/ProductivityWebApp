import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import "./NoteApp.css"

export const Note = () => {
  return (
    <div className='note'>
        <span>Hello this is our first note, YEAH!</span>
        <div className='note-footer'>
            <small>09/01/2025</small>
            <MdDeleteForever className='delete-icon' size="1.3em"/>
        </div>
    </div>
  )
}
