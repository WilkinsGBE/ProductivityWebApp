import React from "react";
import "./PomodoroApp.css";
import ReactSlider from "react-slider";

export const Settings = () => {
  return (
    <>
      <div className="settings-page">
        <label>Work Minutes:</label>
        <ReactSlider
          className="slider red"
          thumbClassName="thumb"
          trackClassName="track"
          value={45}
          min={1}
          max={120}
        />
        <label>Break minutes:</label>
        <ReactSlider
          className="slider green"
          thumbClassName="thumb"
          trackClassName="track"
          value={15}
          min={1}
          max={30}
        />
      </div>
    </>
  );
};
