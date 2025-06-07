import React from "react";

const StepNum = ({ currentStep, thisStepNumber, thisStepName }) => {
  //console.log(thisStepNumber, "thisStep");
  //console.log("wawawa");
  return (
    <div className="md:flex md:justifty-center md:items-center md:gap-4">
      <div
        className={`${
          thisStepNumber == currentStep ||
          (thisStepNumber == 4 && currentStep == 5)
            ? "text-denim bg-skyblue"
            : "border border-white text-white"
        } rounded-full  w-[33px] h-[33px] flex items-center justify-center font-bold`}
      >
        {thisStepNumber}
      </div>
      <div className="flex-col gap-1 hidden md:flex">
        <div className="text-lightblue font-md uppercase">
          Step {thisStepNumber}
        </div>
        <div className="text-white uppercase font-bold">{thisStepName}</div>
      </div>
    </div>
  );
};

function StepIndicators({ currentStep }) {
  //console.log(currentStep, "currentStep");
  const steps = [
    { number: 1, name: "your info" },
    { number: 2, name: "select plan" },
    { number: 3, name: "add-ons" },
    { number: 4, name: "summary" },
  ];
  return (
    <div className="absolute top-8 inset-0 step-container flex justify-center w-full md:justify-start md:mx-8">
      <div className=" flex step-indicators gap-4 md:flex-col">
        {steps.map((step, index) => (
          <StepNum
            currentStep={currentStep}
            thisStepNumber={step.number}
            thisStepName={step.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StepIndicators;
