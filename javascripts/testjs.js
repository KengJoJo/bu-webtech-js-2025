const raw = prompt("Input integer number");
if (raw !== null) {
  const s = raw.trim();
  const n = Number(s);
  if (s === "" || !Number.isFinite(n) || !Number.isInteger(n)) {
    alert("Please enter an integer number");
  } else if (n === 0) {
    alert("zero integer number");
  } else if (n % 2 === 0) {
    alert("even integer number");
  } else {
    alert("odd integer number");
  }
}
