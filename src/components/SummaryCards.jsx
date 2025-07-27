import React from 'react';

const SummaryCards = ({ data }) => {
  if (!data.length) return null;

  const totalLoan = data.reduce((acc, cur) => acc + cur.loan, 0);
  const totalSip = data.reduce((acc, cur) => acc + cur.sip, 0);

  return (
    <div>
      <p>Total Loan Paid: ₹{totalLoan.toLocaleString()}</p>
      <p>Total SIP Value: ₹{totalSip.toLocaleString()}</p>
      <p>Net Gain/Loss: ₹{(totalSip - totalLoan).toLocaleString()}</p>
    </div>
  );
};

export default SummaryCards;
