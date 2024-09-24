// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(name) {
  const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

// Adding the loading message
const output = document.getElementById('output');

// Create three promises
const promise1 = createPromise('Promise 1');
const promise2 = createPromise('Promise 2');
const promise3 = createPromise('Promise 3');

// Record start time to calculate total duration
const startTime = performance.now();

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then((results) => {
  // Check if the loading element exists before removing it
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.remove();
  }

  // Calculate total time
  const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

  // Populate the table with the results
  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add the total time row
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
