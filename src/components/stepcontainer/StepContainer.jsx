import React, { useState } from "react";
// Future steps: import Step2, Step3, etc.

import "./StepContainer.css";
import Sidebar from "../sidebar/Sidebar";
import Step1 from "../step1/Step1";
import SelectPlan from "../selectplan/SelectPlan";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import Step5 from "../step5/Step5";

export default function StepContainer() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState({
    name: "",
    priceMonthly: 0,
  });
  const [billing, setBilling] = useState("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

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
      {step === 2 && (
        <SelectPlan
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          billing={billing}
          setBilling={setBilling}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Step3
          billing={billing}
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {step === 4 && (
        <Step4
          selectedPlan={selectedPlan}
          billing={billing}
          selectedAddOns={selectedAddOns}
          onBack={handleBack}
          setStep={setStep}
          
        />
      )}
      {step === 5 && <Step5 />}


      {/* Future: Add Step2, Step3, Step4 here */}
    </div>
  );
}
