import React from "react";
import "./Step5.css";

export default function Step5() {
  return (
    <div className="step5-container">
      <div className="thank-you-box">
        <img src="images/icon-thank-you.svg" alt="Thank You" className="thank-you-icon" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at <strong>support@loremgaming.com</strong>.
        </p>
      </div>
    </div>
  );
}
