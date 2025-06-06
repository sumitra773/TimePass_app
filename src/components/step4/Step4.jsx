import React from "react";
import "./Step4.css";

export default function Step4({
  selectedPlan,
  billing,
  selectedAddOns,
  onBack,
  setStep
}) {
  if (!selectedPlan || !selectedPlan.name) {
    return <div>Error: No plan selected.</div>;
  }

  const unit = billing === "Yearly" ? "yr" : "mo";
  const planPrice =
    billing === "Yearly" ? selectedPlan.priceYearly : selectedPlan.priceMonthly;

  const addOnsList = [
    { name: "Online service", monthly: 1, yearly: 10 },
    { name: "Larger storage", monthly: 2, yearly: 20 },
    { name: "Customizable profile", monthly: 2, yearly: 20 },
  ];

  const selectedAddOnDetails = addOnsList.filter((addon) =>
    selectedAddOns.includes(addon.name)
  );

  const addOnsTotal = selectedAddOnDetails.reduce((total, addon) => {
    return total + (billing === "Yearly" ? addon.yearly : addon.monthly);
  }, 0);

  const total = planPrice + addOnsTotal;

  const onConfirm = (e) => {
    e.preventDefault();
    setStep(5); 
  };

  return (
    <div className="step4-container">
      <form onSubmit={onConfirm} className="main-content">
        <h2>Finishing up</h2>
        <p>Double-check everything before confirming.</p>

        <div className="summary-box">
          <div className="summary-plan">
            <div>
              <strong>
                {selectedPlan.name} ({billing})
              </strong>
              <button type="button" onClick={onBack} className="change-button">
                Change
              </button>
            </div>
            <div>
              ${planPrice}/{unit}
            </div>
          </div>

          <hr />

          {selectedAddOnDetails.map((addon) => {
            const price =
              billing === "Yearly" ? addon.yearly : addon.monthly;
            return (
              <div className="summary-addon" key={addon.name}>
                <span>{addon.name}</span>
                <span>
                  +${price}/{unit}
                </span>
              </div>
            );
          })}
        </div>

        <div className="total">
          <span>Total (per {billing === "Yearly" ? "year" : "month"})</span>
          <span className="total-amount">
            ${total}/{unit}
          </span>
        </div>

        <div className="navigation-buttons">
          <button type="button" className="back" onClick={onBack}>
            Go Back
          </button>
          <button type="submit" className="next">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
