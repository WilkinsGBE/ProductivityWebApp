import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Todo } from "./components/TodoApp/Todo";
import { Homepage } from "./components/Homepage/Homepage";
import { Pomodoro } from "./components/PomodoroApp/Pomodoro";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>Productivity Web App</li>
            <li className="home">
              <Link to="/">Homepage</Link>
            </li>
            <li className="todos">
              <Link to="/todo">To-Do</Link>
            </li>
            {/* Uncomment and add these when the components are ready */}
            {/*<li className="note">
              <Link to="/notes">Notes</Link>
            </li> */}
            <li className="pomo">
              <Link to="/pomodoro">Pomodoro</Link>
            </li>
            <li>Instagram icon</li>
            <li>LinkeDIn icon</li>
            <li>GitHub Icon</li>
            <li>Youtube Icon ?</li>
          </ul>
        </nav>
        <Routes>
          {/* Set the Homepage as the default path */}
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />         
          {/*<Route path="/notes" element={<Notes />} /> */}
          <Route path="/pomodoro" element={<Pomodoro />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
