import React from "react";
import "./PomodoroApp.css";
import { Timer } from "./Timer"; 
import { Settings } from "./Settings";
import { useState } from "react";

export const Pomodoro = () => {

  const [showSettings, setShowSettings] = useState(true);
  return (
    <div className="pomodoro">
    <main>
      {/* If true the Settings get showed, otherwise, the Timer is displayed */}
      {showSettings ? <Settings /> : <Timer />}
    </main>
    </div>

  );
};
