
import React, { useState } from "react";
// Future steps: import Step2, Step3, etc.

import "./StepContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import Step1 from "../Step1";

export default function StepContainer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep(step + 1);

  return (
    <div className="container">
      <Sidebar currentStep={step} />
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {/* Future: Add Step2, Step3, Step4 here */}
    </div>
  );
}
