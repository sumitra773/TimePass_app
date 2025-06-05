
import React from "react";

export default function Step1({ formData, setFormData, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes("@") || !formData.phone) {
      alert("Please fill in all fields with valid data.");
    } else {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label>Email Address</label>
      <input name="email" value={formData.email} onChange={handleChange} />

      <label>Phone Number</label>
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />

      <button className="next-btn" type="submit">Next Step</button>
    </form>
  );
}
