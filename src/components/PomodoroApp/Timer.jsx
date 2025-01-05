import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlayButton } from "./PlayButton";
import { PauseButton } from "./PauseButton";
import { SettingsButton } from "./SettingsButton";
import "./PomodoroApp.css";

const red = "#f54e4e";
const green = "#4aec8c";

export const Timer = () => {
  return (
    <div>
      <div>
        <CircularProgressbar
          value={60}
          text={`${60}%`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textColor: "#fff",
            pathColor: red,
            tailColor: "rgba(255,255,255,0.2)",
          })}
        />
      </div>
      <div className="buttons">
        <div>
          <PlayButton className=""/>
          <PauseButton className="pause-button"/>
        </div>
        <div>
          <SettingsButton className="settings-button" />
        </div>
      </div>
    </div>
  );
};
