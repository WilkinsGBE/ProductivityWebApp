import React, { useContext, useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlayButton } from "./PlayButton";
import { PauseButton } from "./PauseButton";
import { SettingsButton } from "./SettingsButton";
import "./PomodoroApp.css";
import { SettingsContext } from "./SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";

export const Timer = (props) => {
  // This will be use to switch to true the settings Page when it is clicked
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <div className={props.className}>
        {/* circular bar from https://www.npmjs.com/package/react-circular-progressbar */}
        <CircularProgressbar
          value={percentage}
          text={`${minutes + ":" + seconds}`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textColor: "#fff",
            pathColor: mode === "work" ? red : green,
            tailColor: "rgba(255,255,255,0.2)",
          })}
        />
      </div>
      <div className="play-pause">
        {isPaused ? (
          <PauseButton
            className="pause-button"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            className="pause-button"
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="settings">
        <SettingsButton
          onClick={() => settingsInfo.setShowSettings(true)}
          className="settings-button"
        />
      </div>
    </div>
  );
};
