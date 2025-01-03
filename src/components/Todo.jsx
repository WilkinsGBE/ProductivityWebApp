import React, { useEffect, useRef, useState } from "react";
import "../style/TodoApp.css";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

export const Todo = () => {
  // Function to update the todo-list
  // we show the items that are already in the local storage
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

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
  };

  // function to handle the task when it is done
  const deleteTodo = (id) => {
    // looks if all todos items have the same id
    // as the one which is the paramenter
    setTodoList((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };

  //similar to the deleteTodo function
  //map the list of prevtodos and and return true or false
  const toggle = (id) => {
    setTodoList((previousTodos) => {
      return previousTodos.map((todo) => {
        if (todo.id === id) {
          // if it is true it returns false
          // or if it is false it returns true
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  // dependancy array
  useEffect(() => {
    //storing the task in the browser storage
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="todo">
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
                    toggle={toggle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
