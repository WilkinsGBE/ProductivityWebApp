import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Todo } from "./components/TodoApp/Todo";
import { Homepage } from "./components/Homepage/Homepage";
import { NotesApp } from "./components/NoteApp/NotesApp";
import { Pomodoro } from "./components/PomodoroApp/Pomodoro";

const App = () => {
  return (
    <Router>
      <Header /> {/* Always visible header with navigation links */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/notes" element={<NotesApp />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
