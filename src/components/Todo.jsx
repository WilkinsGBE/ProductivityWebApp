import React from "react";
import "../style/TodoApp.css";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

export const Todo = () => {
  return (
    <>
      <div className="body">
        <div className="box">
          {/* -------- Title ------- */}
          <div className="header">
            <img src={todo_icon} alt="" />
            <h1>To-Do List</h1>
          </div>
          {/* ------ Input box ------ */}
          <div className="input">
            <input type="text" placeholder="Add your task" />
            <button>ADD</button>
          </div>

          {/* ----- To-do list --------- */}
          <div className="todo-items">
          <TodoItems text="Learn Coding"/>
          <TodoItems text="Learn App Development"/>
          </div>
        </div>
      </div>
    </>
  );
};
