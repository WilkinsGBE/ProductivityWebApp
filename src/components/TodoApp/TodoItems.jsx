import React from "react";
import "./TodoApp.css";
import tick from "../../assets/greentick.png";
import not_tick from "../../assets/not_tick.png";
import delete_icon from "../../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <>
      <div className="todolist">
        <div
          onClick={() => {
            toggle(id);
          }}
          className="list"
        >
          {/* if true, show the tick icon, otherwise shows the nottick icon */}
          <img src={isComplete ? tick : not_tick} alt="" />
          {/* text-decoration that depends if the task is done or no */}
          <p
            style={{
              textDecoration: isComplete ? "line-through" : "none",
              textDecorationThickness: isComplete ? "3px" : "initial",
            }}
          >
            {text}
          </p>
        </div>
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          className="delete-icon "
          src={delete_icon}
          alt=""
        />
      </div>
    </>
  );
};

export default TodoItems;
