document.getElementById("sortBtn").addEventListener("click", function() {
  const input = document.getElementById("arrayInput").value;
  // parse into array of numbers
  let arr = input.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  
  // simple bubble‐sort (or use built-in sort)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  document.getElementById("result").textContent = "Sorted Array: [" + arr.join(", ") + "]";
});
