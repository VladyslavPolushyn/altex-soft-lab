const generateBtn = document.getElementById('set-dominoes-btn');
const rollBtn = document.getElementById('roll-dominoes-btn');
const outputText = document.getElementById('output-text');

const topDominoesBlocks = document.querySelectorAll('.tops .domino');
const bottomDominoesBlocks = document.querySelectorAll('.bottoms .domino');

const numOfDominoes = 6;

let tops = [];
let bottoms = [];

generateBtn.onclick = generateDominoes;
rollBtn.onclick = rollDominoes;

function rollDominoes() {

	rollBtn.setAttribute('disabled', 'disabled');

	let rollNum = false;

	const numCount = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0
	};

	for (let i = 0; i < numOfDominoes; i++) {

		numCount[tops[i]] += 1;
		// Check unnecessary increment if double
		if (tops[i] !== bottoms[i]) {
			numCount[bottoms[i]] += 1;
		}
		
	}

	for (let key in numCount) {

		if (numCount[key] === numOfDominoes) {
			rollNum = +key;
		}

	}

	if (!rollNum) {
		outputText.innerHTML = '-1';
	} else {

		let topCount = 0;
		let bottomCount = 0;

		for (let i = 0; i < numOfDominoes; i++) {

			if (tops[i] !== bottoms[i]) {

				if (tops[i] === rollNum) {
					topCount++;
				} else if (bottoms[i] === rollNum) {
					bottomCount++;
				}

			}

		}

		for (let i = 0; i < numOfDominoes; i++) {

			if (topCount > bottomCount) {

				if (bottoms[i] === rollNum) {
					let temp = tops[i];
					tops[i] = bottoms[i];
					bottoms[i] = temp;
				}

				outputText.innerHTML = bottomCount;

			} else {

				if (tops[i] === rollNum) {
					let temp = bottoms[i];
					bottoms[i] = tops[i];
					tops[i] = temp;
				}

				outputText.innerHTML = topCount;

			}

		}

		dotsRender();

	}

}

function dotsRender() {
	for (let i = 0; i < numOfDominoes; i++) {
		topDominoesBlocks[i].className = `domino dot-${tops[i]}`;
		bottomDominoesBlocks[i].className = `domino dot-${bottoms[i]}`;
	}
}

function generateDominoes() {
	// Clear the previous genaration
	resetDominoes();
	outputText.innerHTML = '';

	// tops = [2,1,2,4,2,2];
	// bottoms = [5,2,6,2,3,2];
	// dotsRender();

	// Generating the new Array of Dominoes and Render it
	// You can comment random Dominoes rendering and set the values above

	for (let i = 0; i < numOfDominoes; i++) {
		tops.push(randNum(1, 6));
		bottoms.push(randNum(1, 6));

		dotsRender();
	}

	rollBtn.removeAttribute('disabled');

}

function resetDominoes() { 
	tops = [];
	bottoms = [];

	for (let i = 0; i < numOfDominoes; i++) {
		topDominoesBlocks[i].className = "domino";
		bottomDominoesBlocks[i].className = "domino";
	}

}

function randNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}