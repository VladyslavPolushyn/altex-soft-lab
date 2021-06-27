const balanceField = document.getElementById('balance');
const withdrawBtns = document.querySelectorAll('.withdraw-btn:not(.manual-withdraw-btn)');
const manualWithdrawBtn = document.getElementById('manual-withdraw-btn');
const withdrawInput = document.getElementById('withdraw-input');
const alertField = document.getElementById('alert-field');

withdrawBtns.forEach(elem => {
	elem.addEventListener('click', () => withdraw(elem.value));
});

manualWithdrawBtn.addEventListener('click', () => withdraw(withdrawInput.value));

let balance = 4273;

// I didn't use an object and "for..in" because indexing is important for my code
const bills = [
	[1000, 3],
	[500, 4],
	[200, 8],
	[100, 10],
	[50, 13],
	[20, 22],
	[10, 31]
]

balanceField.innerHTML = balance;

function withdraw(sumValue) {

	if (sumValue && sumValue <= balance) {

		for (let i = 0; i < bills.length; i++) {

			console.log(bills[i]);

		}

	} else if (sumValue && sumValue >balance) {
		alertField.innerHTML = `Your balance is less then ${sumValue} UAH!`;
	} else {
		alertField.innerHTML = `Enter the correct sum!`;
	}

	
	
}