import React, { useState } from "react";
import allPlans from "../data/planData.json";

const Radio = ({
  name,
  image,
  monthlyPrice,
  yearlyPrice,
  plan,
  isYearly,
  changeHandler,
}) => {
  //console.log(plan, "planinside");
  //console.log(image);
  const baseUrl = "/multistep-form/";
  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <>
      <label
        htmlFor={name}
        className={`${
          plan === name ? "border-purple shadow-md" : "border-lightgrey"
        } block p-4 border w-full rounded-lg my-2 lg:w-[160px] lg:py-4 lg:flex-grow`}
      >
        <div className="flex gap-2 lg:flex-col lg:justify-start lg:px-1 lg:gap-10">
          <img src={baseUrl + image} className="max-w-[40px]" />
          <div className="flex flex-col">
            <span className="font-semibold text-denim">{capitalize(name)}</span>
            <span className="text-sm text-grey">
              {isYearly ? yearlyPrice : monthlyPrice}
            </span>
            {isYearly && (
              <span className="text-xs text-denim font-medium">
                2 months free
              </span>
            )}
          </div>
        </div>
        <input
          type="radio"
          name="plan"
          id={name}
          value={name}
          checked={plan === name}
          onChange={changeHandler}
          className="hidden"
        />
      </label>
    </>
  );
};

function Step2({ isYearly, setIsYearly, plan, setPlan, errors }) {
  //console.log(plan, "this is the current plan");

  const handlePlanChange = (e) => {
    //console.log(e.target.value);
    setPlan(e.target.value);
  };

  const handlePlanDurationChange = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="step-1 rounded-lg w-11/12 mx-auto md:pt-1 lg:px-8 lg:py-8 lg:w-full ">
      <h1 className="text-denim text-3xl font-bold">Select your plan</h1>
      <p className="text-grey py-2 lg:py-4">
        You have the option of monthly or yearly billing.
        {errors.plan && <span className="mx-2 text-red">{errors.plan}</span>}
      </p>

      <form>
        <div className="lg:flex lg:gap-6 lg:justify-evenly">
          {allPlans.map((items) => (
            <Radio
              key={items.name}
              name={items.name}
              image={items.image}
              monthlyPrice={items.monthlyPrice}
              yearlyPrice={items.yearlyPrice}
              plan={plan}
              isYearly={isYearly}
              changeHandler={handlePlanChange}
            />
          ))}
        </div>

        <div className="toggle-plan flex items-center gap-2 py-4 lg:pt-12 justify-between  w-3/4 mx-auto max-w-[240px] ">
          <span
            className={`${
              isYearly ? "text-grey" : "text-denim"
            } ms-3 text-sm font-medium `}
          >
            Monthly
          </span>

          <label className="relative inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              value={isYearly}
              checked={isYearly}
              onChange={handlePlanDurationChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-denim peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          <span
            className={`${
              isYearly ? "text-denim" : "text-grey"
            } ms-3 text-sm font-medium`}
          >
            Yearly
          </span>
        </div>
      </form>
    </div>
  );
}

export default Step2;
