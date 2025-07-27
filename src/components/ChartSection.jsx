import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ChartSection = ({ data }) => {
  if (!data.length) return null;
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Line type="monotone" dataKey="loan" stroke="#82ca9d" />
      <Line type="monotone" dataKey="sip" stroke="#8884d8" />
    </LineChart>
  );
};

export default ChartSection;
