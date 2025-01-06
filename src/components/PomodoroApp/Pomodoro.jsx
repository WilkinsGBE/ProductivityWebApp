import React, { useState } from "react";
import "./PomodoroApp.css";
import { Timer } from "./Timer";
import { Settings } from "./Settings";
import { SettingsContext } from "./SettingsContext";

export const Pomodoro = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="pomodoro">
      <main>
        <SettingsContext.Provider
          value={{
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes
          }}
        >
          {/* If true the Settings get showed, otherwise, show Timer */}
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </div>
  );
};
