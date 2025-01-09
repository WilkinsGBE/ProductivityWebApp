import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./NoteApp.css";

export const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};
