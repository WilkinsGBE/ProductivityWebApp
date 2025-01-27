import React from "react";
import "./PomodoroApp.css";

export const SettingsButton = (props) => {
  return (
    <div style={{
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: "10px",
      padding: "10px",
      marginTop: "40px",
      marginBottom: "40px",
      fontSize: "1.4rem", 
      lineHeight: "36px",
      justifySelf: "center",
      width: "140px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      alignItems: "center",
      zIndex: 10,
      visibility: "visible",
      opacity: 1,
      minWidth: "100px",
      minHeight: "50px",
  }}>
    <button onClick={props.onClick} style={{
        all: "unset",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        cursor: "pointer"
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
            width: "45px",
            height: "45px",
            padding: "10px",
            color: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
      Settings
    </button>
  </div>
  );
};
