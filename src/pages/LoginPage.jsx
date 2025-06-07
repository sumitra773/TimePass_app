import React, { useState } from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import StepIndicators from "../components/StepIndicators";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import ThankYouPage from "../components/ThankYouPage";
import addonData from "../data/addonData.json";

function LoginPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [plan, setPlan] = useState("");
  const [addons, setAddOns] = useState(addonData);
  const [textFormData, setTextFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  const validateTextForm = () => {
    const newErrors = {};

    if (textFormData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(textFormData.email)) {
      newErrors.email = "Invalid email address";
    }

    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(textFormData.number)) {
      newErrors.number = "Invalid format";
    }

    setErrors(newErrors);

    //true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const validatePlan = () => {
    const newErrors = {};
    if (plan.trim() === "") {
      newErrors.plan = "Please select one";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateTextForm()) {
      return;
    }
    if (currentStep === 2 && !validatePlan()) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <section className="bg-bg-neutral h-screen md:h-screen   md:flex md:flex-col md:pt-[5%] md:p-6">
      <div className="big-container  md:flex md:justify-center h-fit bg-white rounded-xl md:max-w-[1010px] mx-auto md:p-3">
        <div className="main-header relative">
          <div>
            <picture>
              <source media="(min-width:768px)" srcSet={bgSidebarDesktop} />
              <img src={bgSidebarMobile} className="w-full" />
            </picture>

            <StepIndicators currentStep={currentStep} />
          </div>
        </div>

        <div className="md:bg-white m-content flex flex-col justify-between">
          <div className="absolute  md:static md:w-full top-24 w-full flex justify-center">
            <div className="rounded-lg bg-white w-11/12 max-w-[480px] py-6 px-6 md:py-2 md:max-w-[1000px] lg:w-full">
              {currentStep === 1 && (
                <Step1
                  textFormData={textFormData}
                  setTextFormData={setTextFormData}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <Step2
                  isYearly={isYearly}
                  setIsYearly={setIsYearly}
                  plan={plan}
                  setPlan={setPlan}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  isYearly={isYearly}
                  addons={addons}
                  setAddOns={setAddOns}
                />
              )}
              {currentStep === 4 && (
                <Step4
                  setCurrentStep={setCurrentStep}
                  isYearly={isYearly}
                  plan={plan}
                  addons={addons}
                />
              )}
              {currentStep === 5 && <ThankYouPage />}
            </div>
          </div>

          <div
            className={`${
              currentStep === 1 ? "justify-end" : "justify-between"
            } ${
              currentStep === 5 ? "hidden" : ""
            } button-at-footer bg-white  w-full absolute md:static inset-x-0 bottom-0 p-4 flex text-grey max-w-[480px] mx-auto`}
          >
            <button
              className={`${
                currentStep > 1 && currentStep < 5 ? "block" : "hidden"
              }`}
              onClick={handleGoBack}
            >
              Go Back
            </button>
            <button
              className={`${
                currentStep > 3 ? "hidden" : ""
              } bg-denim text-white p-3 rounded-lg hover:opacity-75`}
              onClick={handleNextStep}
            >
              Next Step
            </button>
            <button
              className={`${
                currentStep === 4 ? "" : "hidden"
              } bg-purple text-white p-3 rounded-lg hover:opacity-75`}
              onClick={handleNextStep}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
