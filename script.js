function createPromise(name) {
	const time = (Math.random() * 2 + 1).toFixed(3);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({name, time});
		}, time * 1000);
	})
}

const output = document.getElementById('output');

const promise1 = createPromise('Promise 1');
const promise2 = createPromise('Promise 2');
const promise3 = createPromise('Promise 3');

const startTime = performance.now();

Promise.all([promise1, promise2, promise3]).then((results) => {

	document.getElementById('loading').remove();

	const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

	results.forEach((result) => {
		const row = document.createElement('tr');
		row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
		output.appendChild(row);
	});

	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
	output.appendChild(totalRow);
});