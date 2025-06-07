import React, { useState } from "react";

const Checkbox = ({ addons, handleChange, index, isYearly }) => {
  //console.log(addons);
  //console.log(index);
  return (
    <label
      htmlFor={addons.id}
      className={`${
        addons.checked ? "border-purple shadow-md" : "border-grey"
      } block py-4 px-3 border w-full rounded-lg my-2 lg:w-[400px] lg:py-4`}
    >
      <div className="flex gap-2 lg:gap-4 lg:px-3 items-center justify-start">
        <input
          type="checkbox"
          name="add-on"
          id={addons.id}
          checked={addons.checked}
          onChange={() => handleChange(index)}
        />
        <div className="flex flex-col w-3/4 pl-2">
          <span className="font-semibold text-denim">{addons.name}</span>
          <span className="text-xs text-grey">{addons.desc}</span>
        </div>
        <div className="text-xs text-purple">
          {isYearly ? addons.yearlyPrice : addons.monthlyPrice}
        </div>
      </div>
    </label>
  );
};

function Step3({ isYearly, addons, setAddOns }) {
  //console.log(addonData);

  const handleChange = (i) => {
    //console.log(i, "change ta");
    setAddOns(
      addons.map((item, currentIndex) =>
        currentIndex === i ? { ...item, checked: !item.checked } : item
      )
    );
    //console.log(addons);
  };

  return (
    <div className="step-1 rounded-lg w-11/12 bg-white mx-auto md:pt-4 lg:w-full lg:pt-14 lg:px-14">
      <h1 className="text-denim text-3xl font-bold">Pick add-ons</h1>
      <p className="text-grey py-2">
        Add-ons help enhance your gaming experience.
      </p>

      <form className="md:pt-4">
        {addons.map((addon, index) => {
          return (
            <Checkbox
              addons={addon}
              handleChange={handleChange}
              index={index}
              isYearly={isYearly}
              key={addon.name + index}
            />
          );
        })}
      </form>
    </div>
  );
}

export default Step3;
