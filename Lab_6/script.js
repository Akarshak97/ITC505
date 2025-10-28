document.getElementById("sortBtn").addEventListener("click", function() {
  let arr = [5, 3, 8, 4, 2];
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  document.getElementById("result").textContent = "Sorted Array: [" + arr.join(", ") + "]";
});
