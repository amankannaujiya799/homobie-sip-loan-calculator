import React, { useState } from 'react';
import calculateData from '../utils/calculations';

const InputForm = ({ setData }) => {
  const [form, setForm] = useState({
    loan: 3000000,
    interest: 7.5,
    tenure: 20,
    sip: 10000,
    sipReturn: 12
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateData(form);
    setData(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Loan Amount <input type="number" name="loan" value={form.loan} onChange={handleChange} /></label>
      <label>Interest Rate (%) <input type="number" step="0.1" name="interest" value={form.interest} onChange={handleChange} /></label>
      <label>Loan Tenure (Years) <input type="number" name="tenure" value={form.tenure} onChange={handleChange} /></label>
      <label>SIP Amount <input type="number" name="sip" value={form.sip} onChange={handleChange} /></label>
      <label>SIP Return Rate (%) <input type="number" step="0.1" name="sipReturn" value={form.sipReturn} onChange={handleChange} /></label>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;
