const balanceField = document.getElementById('balance');
const withdrawBtns = document.querySelectorAll('.withdraw-btn:not(.manual-withdraw-btn)');
const manualWithdrawBtn = document.getElementById('manual-withdraw-btn');
const withdrawInput = document.getElementById('withdraw-input');
const alertField = document.getElementById('alert-field');
const moneyImg = document.getElementById('money');

withdrawBtns.forEach(elem => {
	elem.addEventListener('click', () => withdraw(elem.value));
});

manualWithdrawBtn.addEventListener('click', () => withdraw(withdrawInput.value));

let balance = 6000;

// I didn't use an object and "for..in" because indexing is important for my code
let bills = [
	[1000, 3],
	[500, 4],
	[200, 8],
	[100, 10],
	[50, 13],
	[20, 22],
	[10, 31]
];

let atmMax = 0;

for (let i = 0; i < bills.length; i++) {
	atmMax += bills[i][0] * bills[i][1];
}

balanceField.innerHTML = atmMax;

function withdraw(sumValue) {

	let sum = sumValue;

	alertField.innerHTML = '';
	moneyImg.classList.add('hidden');

	if (sum > 0 && sum <= balance && atmMax > sum) {

		if ( sumValue % bills[bills.length-1][0] ) {
			alertField.innerHTML = `<p>There is no such bills in ATM!</p>`;
			return;
		}

		for (let i = 0; i < bills.length; i++) {

			if (bills[i][1] === 0) {
				continue;
			}

			let quantity = Math.floor(sumValue / bills[i][0]);

			if (quantity > bills[i][1]) {
				quantity = bills[i][1];
			}

			bills[i][1] -= quantity;
			sumValue -= bills[i][0] * quantity;
			balance -= bills[i][0] * quantity;

			if (quantity > 0) {
				alertField.innerHTML += `<p>${bills[i][0]} UAH x ${quantity}</p>`;
			}
			
		}

		moneyImg.classList.remove('hidden');
		balanceField.innerHTML = atmMax;

	} else if (sum && sum > balance) {
		alertField.innerHTML = `<p>Your balance is less then ${sum} UAH!</p>`;
		moneyImg.classList.add('hidden');
	} else if (atmMax < sum) {
		alertField.innerHTML = `There is not so much money in the ATM`;
		moneyImg.classList.add('hidden');
	} else {
		alertField.innerHTML = `<p>Enter the correct sum!</p>`;
		moneyImg.classList.add('hidden');
	}

}