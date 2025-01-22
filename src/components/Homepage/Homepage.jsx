import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="text-container">
          <h1 className="headline">Boost Your Productivity.</h1>
          <p className="subtext">Improve your grades and your R Score</p>
        </div>
        <div className="description">
          <section className="todoapp">
            <h2>Todo App</h2>
            <p>
              Effortlessly manage your tasks and stay organized with the Todo
              Web App! This simple yet powerful app allows you to create, track,
              and mark tasks as complete with just a few clicks. Whether it's
              daily errands, work tasks, or personal goals, this app helps you
              prioritize and achieve them on time.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>Task Creation: Add tasks with clear descriptions.</li>
              <li>Task Completion: Easily check off completed tasks.</li>
              <li>
                Interactive Interface: A clean, minimalistic design with
                drag-and-drop functionality.
              </li>
              <li>Delete & Edit: Modify or delete tasks easily.</li>
              <li>Cloud Sync: Your task list is saved across sessions.</li>
              <li>
                Cross-Browser Compatibility: Accessible on all major browsers.
              </li>
            </ul>
            <button>
              <Link to="/todo">To-Do</Link>
            </button>
          </section>
          <section className="noteapp">
            <h2>Note App</h2>
            <p>
              Capture, organize, and access your thoughts seamlessly with the
              Note-Taking Web App. Ideal for students, professionals, and
              creatives alike, this app allows you to jot down ideas, organize
              your notes by categories, and revisit them whenever you need.
              Whether it’s a class lecture, project notes, or personal ideas,
              everything stays in one convenient space.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>
                Create Notes: Easily add new notes with titles and detailed
                descriptions.
              </li>
              <li>Search Function: Quickly find notes with keywords.</li>
              <li> Delete: Remove notes as needed.</li>
              <li>Cloud Sync: Notes are securely stored on your device.</li>
              <li>
                Clean Interface: Distraction-free interface for easy
                note-taking.
              </li>
            </ul>
            <button>
              <Link to="/notes">Notes</Link>
            </button>
          </section>
          <section className="pomodoroapp">
            <h2>Pomodoro App</h2>
            <p>
              Boost your productivity and focus with the Pomodoro Timer Web App.
              Using the Pomodoro technique, this app helps break your work into
              intervals (typically 25 minutes), separated by short breaks to
              refresh your mind. Perfect for studying, work tasks, or creative
              sessions, the app helps you maintain focus and keep distractions
              at bay.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>Work Interval Timer: 25-minute focus sessions.</li>
              <li>
                Break Timer: 5-minute breaks after work intervals to refresh.
              </li>
              <li>
                Customizable Time Settings: Adjust work and break duration to
                your preference.
              </li>
              <li>
                Simple Interface: User-friendly design for easy focus session
                setup.
              </li>
            </ul>
            <button>
              <Link to="/pomodoro">Pomodoro</Link>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
