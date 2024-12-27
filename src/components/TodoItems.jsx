import React from "react";
import "../style/TodoApp.css";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({text, id, isComplete}) => {
  return (
    <>
      <div className="todolist">
        <div className="list">
          <img src={tick} alt="" />
          <p>{text}</p>
        </div>
        <img className="delete-icon " src={delete_icon} alt="" />
      </div>
    </>
  );
};

export default TodoItems;
