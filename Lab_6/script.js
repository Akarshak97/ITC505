// script.js
document.getElementById("sortBtn").addEventListener("click", function() {
  const rawInput = document.getElementById("arrayInput").value;

  // Convert the input string into an array of numbers
  let arr = rawInput
    .split(",")
    .map(item => item.trim())
    .filter(item => item !== "")
    .map(item => Number(item))
    .filter(num => !Number.isNaN(num));

  if (arr.length === 0) {
    document.getElementById("result").textContent =
      "Please enter valid numbers separated by commas.";
    return;
  }

  // Sort numerically using compare function (important: default .sort() is lexicographic) :contentReference[oaicite:0]{index=0}
  arr.sort((a, b) => a - b);

  // Display the sorted result
  document.getElementById("result").textContent =
    "Sorted Array: [" + arr.join(", ") + "]";
});
