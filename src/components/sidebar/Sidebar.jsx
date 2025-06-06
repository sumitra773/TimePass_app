import React from "react";
import "./Sidebar.css";

export default function Sidebar({ currentStep }) {
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  return (
    <div className="sidebar">
      {steps.map((label, i) => (
        <div
          key={i}
          className={`step ${currentStep === i + 1 ? "active" : ""}`}
          onClick={() =>setStep(i+1)}
        >
          <div className="step-circle">{i + 1}</div>
          <div className="step-text">
            <span>STEP {i + 1}</span>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
