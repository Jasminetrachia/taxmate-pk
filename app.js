function calculateTax() {
  let income = parseFloat(document.getElementById("income").value);
  let tax = 0;

  if (income <= 600000) {
    tax = 0;
  } else if (income <= 1200000) {
    tax = (income - 600000) * 0.025;
  } else if (income <= 2400000) {
    tax = (600000 * 0.025) + (income - 1200000) * 0.125;
  } else if (income <= 3600000) {
    tax = (600000 * 0.025) + (1200000 * 0.125) + (income - 2400000) * 0.20;
  } else if (income <= 6000000) {
    tax = (600000 * 0.025) + (1200000 * 0.125) + (1200000 * 0.20) + (income - 3600000) * 0.25;
  } else if (income <= 12000000) {
    tax = (600000 * 0.025) + (1200000 * 0.125) + (1200000 * 0.20) + (2400000 * 0.25) + (income - 6000000) * 0.325;
  } else {
    tax = (600000 * 0.025) + (1200000 * 0.125) + (1200000 * 0.20) + (2400000 * 0.25) + (6000000 * 0.325) + (income - 12000000) * 0.35;
  }

  document.getElementById("result").innerText = "Tax: PKR " + tax.toFixed(2);
}
