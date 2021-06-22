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

}

function generateDominoes() {
	// Clear the previous genaration
	resetDominoes();

	// Generat the new Array of Dominoes and Render it

	for (let i = 0; i < numOfDominoes; i++) {
		tops.push(randNum(1, 6));
		bottoms.push(randNum(1, 6));

		topDominoesBlocks[i].classList.add(`dot-${tops[i]}`);
		bottomDominoesBlocks[i].classList.add(`dot-${bottoms[i]}`);
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