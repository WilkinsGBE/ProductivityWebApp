import React, { useRef, useState } from "react";
import "../style/TodoApp.css";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

export const Todo = () => {
  // Function to update the todo-list
  const [todoList, setTodoList] = useState([]);

  // a function to manipulate what is inside the input field
  const inputRef = useRef();

  // function in link with the add button
  const add = () => {
    const inputText = inputRef.current.value.trim();

    // in case there's no text in the input field
    if (inputText === "") {
      return null;
    }

    console.log(inputText);

    // Function for all the new todo object created
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    // Use of the spread operator to update the list
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  // function to handle the task when it is done
  const deleteTodo = (id) => {
    // looks if all todos items have the same id 
    // as the one which is the paramenter
    setTodoList((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id)
    })
  }

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
            <input ref={inputRef} type="text" placeholder="Add your task" />
            <button onClick={add}>ADD</button>
          </div>

          {/* ----- To-do list --------- */}
          <div className="todo-items">
            {/* Parsing in each newTodo object that have been created 
            with the add button to add them to the TodoItems arrays */}
            {todoList.map((item, index) => {
              return (
                <TodoItems
                  key={index}
                  text={item.text}
                  id={item.id}
                  isComplete={item.isComplete}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
