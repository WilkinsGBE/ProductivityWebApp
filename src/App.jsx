import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Todo } from './components/TodoApp/Todo';
import { Homepage } from './components/Homepage/Homepage';
import { Pomodoro } from './components/PomodoroApp/Pomodoro';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/todo">To-Do</Link>
            </li>
           
             <li>
              <Link to="/pomodoro">Pomodoro</Link>
            </li> 
            {/* Uncomment and add these when the components are ready */}
            {/*<li>
              <Link to="/notes">Notes</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          {/* Set the Homepage as the default path */}
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          {/*<Route path="/notes" element={<Notes />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
