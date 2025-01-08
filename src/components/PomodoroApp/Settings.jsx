import React, { useContext, useState } from "react";
import "./PomodoroApp.css";
import ReactSlider from "react-slider";
import { SettingsContext } from "./SettingsContext";
import { BackButton } from "./BackButton";

export const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <>
      <div className="settings-page">
        <label>Work Minutes: {settingsInfo.workMinutes}:00 </label>
        <ReactSlider
          className="slider red"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={240}
        />
        <label>Break minutes: {settingsInfo.breakMinutes}:00 </label>
        <ReactSlider
          className="slider green"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={30}
        />
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </>
  );
};
