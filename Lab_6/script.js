// Listen for click event on the sort button
document.getElementById("sortBtn").addEventListener("click", function() {
  // Read the value from the input field (comma-separated numbers)
  const input = document.getElementById("arrayInput").value;

  // Parse into an array of numbers: split on commas, trim whitespace, parseInt, filter out non-numbers
  let arr = input
    .split(",")
    .map(s => parseInt(s.trim(), 10))
    .filter(n => !isNaN(n));

  // Sort numerically in ascending order
  arr.sort((a, b) => a - b);

  // Display the sorted array in the result paragraph
  document.getElementById("result").textContent =
    "Sorted Array: [" + arr.join(", ") + "]";
});

