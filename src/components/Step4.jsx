import React from "react";
import allPlans from "../data/planData.json";

const AddOnListItem = ({ isYearly, addOnItem }) => {
  return (
    <div className="flex justify-between items-center my-2">
      <span className="text-grey">{addOnItem.name}</span>
      <div className="text-denim">
        {isYearly ? addOnItem.yearlyPrice : addOnItem.monthlyPrice}
      </div>
    </div>
  );
};

function Step4({ setCurrentStep, isYearly, plan, addons }) {
  const handlePlanChange = () => {
    setCurrentStep(2);
  };
  const capitalize = (plan) => {
    return plan.charAt(0).toUpperCase() + plan.slice(1);
  };
  const getPlanPricing = (selectedPlan) => {
    const thisPlan = allPlans.filter((plan) => plan.name === selectedPlan)[0];
    return isYearly ? thisPlan.yearlyPrice : thisPlan.monthlyPrice;
  };
  const selectedAddons = addons.filter((addon) => addon.checked);

  const calculateTotal = (selectedPlan, selectedAddons) => {
    const pricePropertyInt = isYearly ? "intPriceYr" : "intPriceMo";

    const thisPlanPrice = allPlans.filter(
      (plan) => plan.name === selectedPlan
    )[0][pricePropertyInt];

    const addOnTotal = selectedAddons.reduce((accum, addon) => {
      if (addon.checked === true) {
        return accum + addon[pricePropertyInt];
      }
    }, 0);

    return thisPlanPrice + addOnTotal;
  };

  return (
    <div className="step-1 rounded-lg bg-white pt-6  md:p-0 md:pt-12 md:px-2 lg:w-full lg:px-12">
      <h1 className="text-denim text-3xl font-bold">Finishing up</h1>
      <p className="text-grey py-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary my-4 p-4 bg-verylightgrey">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start py-2">
            <span className="text-denim font-medium">
              {capitalize(plan)} ({isYearly ? "Yearly" : "Monthly"})
            </span>
            <button className="text-gray-500 underline hover:text-blue-600 transition duration-300" onClick={handlePlanChange}>
              Change
            </button>
          </div>
          <div className="font-bold text-denim">{getPlanPricing(plan)}</div>
        </div>
        <div className="divider w-[98%] my-3 h-[0.5px] opacity-50 bg-grey"></div>

        {selectedAddons.map((addon) => {
          return (
            <AddOnListItem
              isYearly={isYearly}
              addOnItem={addon}
              key={addon.name}
            />
          );
        })}

        <div className="flex justify-between items-center my-8">
          <span className="text-grey">Total (per month)</span>
          <div className="text-purple text-xl font-semibold ">
            ${calculateTotal(plan, selectedAddons)}/{isYearly ? "yr" : "mo"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
