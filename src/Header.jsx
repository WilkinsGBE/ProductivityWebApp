import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./components/TodoApp/TodoApp.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="Main-header">
      <img className="icon" src="./src/assets/Productivity Web App icon.png" alt="" />
      <h1>Productivity Web App</h1>

      {/* Mobile Menu - Only show if screen width < 768px */}
      {isMobile && !isMenuOpen && (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={openMenu}
          className={`open-menu-icon ${isMenuOpen ? "open" : ""}`}
        />
      )}

      {/* Mobile Menu Container */}
      {isMobile && isMenuOpen && (
        <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={closeMenu}
            className="close-menu-icon"
            style={{ color: "#ff5733" }}
          />

          <ul>
            <li className="home">
              <Link to="/homepage">Homepage</Link>
            </li>
            <li className="todos">
              <Link to="/todo">To-Do</Link>
            </li>
            <li className="notes">
              <Link to="/notes">Notes</Link>
            </li>
            <li className="pomo">
              <Link to="/pomodoro">Pomodoro</Link>
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ariel-wilkins-saintil-a79207286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                style={{ marginRight: "5px" }}
              />
            </a>
            <a
              href="https://github.com/WilkinsGBE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                style={{ margin: "5px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/wilkinss.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                style={{ margin: "5px" }}
              />
            </a>
          </div>
        </div>
      )}

      {/* Desktop Links (Always visible if screen width >= 768px) */}
      {!isMobile && (
        <>
          <div className="header-links">
            <div className="pages-nav-links">
              <ul>
                <li className="home">
                  <Link to="/homepage">Homepage</Link>
                </li>
                <li className="todos">
                  <Link to="/todo">To-Do</Link>
                </li>
                <li className="notes">
                  <Link to="/notes">Notes</Link>
                </li>
                <li className="pomo">
                  <Link to="/pomodoro">Pomodoro</Link>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/ariel-wilkins-saintil-a79207286/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/WilkinsGBE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/wilkinss.1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
