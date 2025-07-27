export default function calculateData(form) {
  const years = form.tenure;
  let loanBalance = form.loan;
  let annualInterest = form.interest / 100;
  let sipAmount = form.sip * 12;
  let sipRate = form.sipReturn / 100;
  let sipTotal = 0;
  const data = [];

  for (let i = 1; i <= years; i++) {
    const loanPayment = loanBalance * annualInterest;
    loanBalance -= loanPayment * 0.6;
    sipTotal = (sipTotal + sipAmount) * (1 + sipRate);
    data.push({ year: i, loan: loanBalance, sip: sipTotal });
  }
  return data;
}
