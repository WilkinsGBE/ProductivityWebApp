import React from "react";
import "../style/homepage.css";

export const Homepage = () => {
  return (
    <>
      <header className="header">
        <nav>
          <a href="/">HomePage</a>
          <a href="/todo">To-Do</a>
          <a href="">Pomodoro</a>
          <a href="">Notes</a>
        </nav>
      </header>
    </>
  );
};
