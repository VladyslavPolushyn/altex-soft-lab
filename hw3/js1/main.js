const generateBtn = document.getElementById('generate-btn');
const coinInput = document.getElementById('coin-input');
const coinsArea = document.getElementById('coins-area');
const output = document.getElementById('output-info');

generateBtn.addEventListener('click', () => {

	const coinsNum = +coinInput.value;

	if (coinsNum > 0) {
		coinsArea.innerHTML = '';
		coinInput.classList.remove('danger-input');
		renderCoins(coinsNum);
	}else {
		coinInput.classList.add('danger-input');
	}

});

function renderCoins(num) {

	for (let i = 1; 0 <= num; i++) {

		let row = document.createElement('div');
		row.classList.add('row');

		if (num <= i) {

			for (let k = 1; k <= num; k++) {
				fillCoinsArea(row);
			}
			output.innerHTML = i - 1;

		}else {

			for (let k = 1; k <= i; k++) {
				fillCoinsArea(row);
			}

		}

		num -= i;

	}

}

function fillCoinsArea(row) {

	let coin = document.createElement('span');
	coin.classList.add('coin');

	row.append(coin);
	coinsArea.append(row);

}