import React from "react";
import "./style.css";

export default function SteperFooter({ stepIndex }) {
  return (
    <>
      <div className="container-highlighter">
        <div
          className={`highlighter ${stepIndex === 0 && "highlighter-active"}`}
        ></div>
        <div
          className={`highlighter ${stepIndex === 1 && "highlighter-active"}`}
        ></div>
        <div
          className={`highlighter ${stepIndex === 2 && "highlighter-active"}`}
        ></div>
      </div>
    </>
  );
}
