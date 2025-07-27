import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ChartSection from './components/ChartSection';
import SummaryCards from './components/SummaryCards';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div className="app glass">
      <DarkModeToggle />
      <h1>Home Loan + SIP Calculator</h1>
      <InputForm setData={setData} />
      <ChartSection data={data} />
      <SummaryCards data={data} />
    </div>
  );
};

export default App;
