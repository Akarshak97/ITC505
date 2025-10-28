document.getElementById("sortBtn").addEventListener("click", function() {
  // Read the input string value from a text-input with id="arrayInput"
  const input = document.getElementById("arrayInput").value;
  
  // Split on commas, trim whitespace, parse to integers, filter out non-numbers
  let arr = input
    .split(",")
    .map(s => parseInt(s.trim(), 10))
    .filter(n => !isNaN(n));
  
  // Sort numerically (ascending)
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Display the sorted result
  document.getElementById("result").textContent =
    "Sorted Array: [" + arr.join(", ") + "]";
});
