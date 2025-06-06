import React from "react";
import "./Step3.css";

export default function Step3({
  selectedAddOns,
  setSelectedAddOns,
  billing,
  onNext,
  onBack,
}) {
  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
    },
  ];

  const toggleAddOn = (name) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== name));
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  return (
    <div className="step3-container">
      <main className="main-content">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="addons">
          {addOns.map((addon) => {
            const price = billing === "Yearly" ? addon.priceYearly : addon.priceMonthly;
            const unit = billing === "Yearly" ? "yr" : "mo";

            return (
              <div
                key={addon.name}
                className={`addon-card ${selectedAddOns.includes(addon.name) ? "selected" : ""}`}
                onClick={() => toggleAddOn(addon.name)}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addon.name)}
                  readOnly
                />
                <div className="addon-info">
                  <strong>{addon.name}</strong>
                  <p>{addon.description}</p>
                </div>
                <div className="addon-price">+${price}/{unit}</div>
              </div>
            );
          })}
        </div>

        <div className="navigation-buttons">
          <button className="back" onClick={onBack}>Go Back</button>
          <button className="next" onClick={() => onNext(selectedAddOns)}>Next Step</button>
        </div>
      </main>
    </div>
  );
}
