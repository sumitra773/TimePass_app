import React, { useState } from "react";

function Step1({ textFormData, setTextFormData, errors }) {
  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setTextFormData({ ...textFormData, [name]: value });
  };

  return (
    <>
      <form className="md:pt-8 lg:px-14">
        <h1 className="text-denim text-3xl font-bold">Personal Info</h1>
        <p className="text-grey py-2">
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col gap-2 py-2">
          <div className="text-red flex justify-between">
            <label htmlFor="name" className="font-sm text-denim font-medium">
              Name
            </label>
            {errors.name && <div>{errors.name}</div>}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={textFormData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className={`${
              errors.name ? "border-red" : "border-grey"
            } border rounded-md p-2`}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <div className="text-red flex justify-between">
            <label htmlFor="name" className="font-sm text-denim font-medium">
              Email
            </label>
            {errors.email && <div>{errors.email}</div>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={textFormData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`${
              errors.email ? "border-red" : "border-grey"
            } border rounded-md p-2`}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <div className="text-red flex justify-between">
            <label htmlFor="name" className="font-sm text-denim font-medium">
              Phone Number
            </label>
            {errors.number && <div>{errors.number}</div>}
          </div>
          <input
            type="tel"
            id="number"
            name="number"
            value={textFormData.number}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            pattern="[0-9]{10}"
            maxLength="10"
            className={`${
              errors.number ? "border-red" : "border-grey"
            } border rounded-md p-2`}
          />
        </div>
      </form>
    </>
  );
}

export default Step1;
