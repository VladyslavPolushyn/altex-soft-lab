const resultField = document.getElementById('result-block');

getFriendlyNumbers(200, 10000);

function getFriendlyNumbers(start, end) {

	if ( start > end || start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number' ) {
		return false;
	}

	let nums = [];
	let sumOfDivisors = [];
	let result = [];
	let existNums =[];

	for (let i = start; i <= end; i++) {
		if (i === 1) {
			continue;
		}
		nums.push(i);
		sumOfDivisors.push( getSum(getDivisors(i)) );
	}

	for (let i = 0; i < nums.length; i++) {
		if ( (sumOfDivisors.indexOf(nums[i]) >= 0) && (nums[sumOfDivisors.indexOf(nums[i])] === sumOfDivisors[i]) && (nums[i] !== sumOfDivisors[i]) ) {
			if (existNums.includes(nums[i]) || existNums.includes(nums[sumOfDivisors.indexOf(nums[i])])) {
				continue;
			}
			result.push( [ nums[i], nums[sumOfDivisors.indexOf(nums[i])] ] );
			existNums.push(nums[i], nums[sumOfDivisors.indexOf(nums[i])]);
		}
	}

	for (let i = 0; i < result.length; i++) {
		resultField.insertAdjacentHTML('beforeend', `<p>[${result[i][0]}, ${result[i][1]}]</p>`);
	}
	console.log(result);
	return result;
}

function getDivisors(num) {
	let result = [];
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			result.push(i);
		}
	}
	return result;
}

function getSum(arr) {
	if (arr.length !== 0) {
		return arr.reduce( (accum, current) => accum + current );
	}
}

