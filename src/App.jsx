import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Todo } from "./components/TodoApp/Todo";
import { Homepage } from "./components/Homepage/Homepage";
import { Pomodoro } from "./components/PomodoroApp/Pomodoro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
            <a
              href="https://www.linkedin.com/in/ariel-wilkins-saintil-a79207286/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/WilkinsGBE" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/wilkinss.1/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
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
