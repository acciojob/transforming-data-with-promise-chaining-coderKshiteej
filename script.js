//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.onclick = function () {
  let num = Number(document.getElementById("ip").value);
  output.innerHTML = ""; // Clear previous results

  // Utility function to create delayed promises
  function delayPromise(value, time) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), time);
    });
  }

  // 1️⃣ First promise: return number after 2 sec
  delayPromise(num, 2000)
    .then((res1) => {
      output.innerHTML = `Result: ${res1}`;
      return delayPromise(res1 * 2, 2000); // 2️⃣ Multiply
    })
    .then((res2) => {
      output.innerHTML = `Result: ${res2}`;
      return delayPromise(res2 - 3, 1000); // 3️⃣ Subtract
    })
    .then((res3) => {
      output.innerHTML = `Result: ${res3}`;
      return delayPromise(res3 / 2, 1000); // 4️⃣ Divide
    })
    .then((res4) => {
      output.innerHTML = `Result: ${res4}`;
      return delayPromise(res4 + 10, 1000); // 5️⃣ Add
    })
    .then((finalRes) => {
      output.innerHTML = `Final Result: ${finalRes}`;
    });
};
