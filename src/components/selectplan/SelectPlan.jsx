import React from "react";
import "./SelectPlan.css";

export default function SelectPlan({
  selectedPlan,
  setSelectedPlan,
  billing,
  setBilling,
  onNext,
  onBack,
}) {
  const plans = [
    {
      name: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
      icon: <img src="images/icon-arcade.svg" alt="Arcade" />,
    },
    {
      name: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
      icon: "🎮",
    },
    {
      name: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
      icon: "👾",
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan); // set full object, not just name
  };

  const handleToggleBilling = () => {
    setBilling((prev) => (prev === "Yearly" ? "Monthly" : "Yearly"));
  };

  const handleNext = () => {
    if (!selectedPlan.name) {
      alert("Please select a plan before proceeding.");
      return;
    }
    onNext();
  };

  return (
    <div className="step2-container">
      <main className="main-content">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plans">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${
                selectedPlan.name === plan.name ? "selected" : ""
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <div className="plan-icon">{plan.icon}</div>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                {billing === "Monthly"
                  ? `$${plan.priceMonthly}/mo`
                  : `$${plan.priceYearly}/yr`}
              </div>
              {billing === "Yearly" && (
                <div className="free-months">2 months free</div>
              )}
            </div>
          ))}
        </div>

        <div className="billing-toggle">
          <span className={billing === "Monthly" ? "active" : ""}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={billing === "Yearly"}
              onChange={handleToggleBilling}
            />
            <span className="slider"></span>
          </label>
          <span className={billing === "Yearly" ? "active" : ""}>Yearly</span>
        </div>

        <div className="navigation-buttons">
          <button className="back" onClick={onBack}>
            Go Back
          </button>
          <button className="next" onClick={handleNext}>
            Next Step
          </button>
        </div>
      </main>
    </div>
  );
}
