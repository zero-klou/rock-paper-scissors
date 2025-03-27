let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);

function playRound(e = null) {
	const humanChoice = e.target.getAttribute("data-value");
	const computerChoice = getComputerChoice();

	if (humanChoice == computerChoice) {
		showResultsUI("Draw!");
		return;
	}

	let isHumanWin = null;

	switch (humanChoice) {
		case "rock":
			isHumanWin = computerChoice == "paper" ? false : true;
			break;

		case "paper":
			isHumanWin = computerChoice == "scissors" ? false : true;
			break;

		case "scissors":
			isHumanWin = computerChoice == "rock" ? false : true;
			break;

		default:
			isHumanWin = false;
	}

	if (isHumanWin) {
		humanScore++;
		showResultsUI(`You win! ${humanChoice} beats ${computerChoice}`);
	} else {
		computerScore++;
		showResultsUI(`You lose! ${computerChoice} beats ${humanChoice}`);
	}

	updateScoresUI();
	if (humanScore + computerScore == 5) endGame();
}

function endGame() {
	const resultGameText =
		humanScore > computerScore
			? "You beat this electronic ass! Congrats!!!"
			: "Computer is the best! Good luck next time!";
	humanScore = 0;
	computerScore = 0;
	showResultsUI(resultGameText);
}

function updateScoresUI() {
	const humanScoreEl = document.querySelector("#human-score");
	const computerScoreEl = document.querySelector("#computer-score");

	humanScoreEl.textContent = humanScore;
	computerScoreEl.textContent = computerScore;
}

function showResultsUI(resultText) {
	const resultEl = document.querySelector(".result");
	resultEl.textContent = resultText;
}

/*
	Формирует рандомное число от 0 до 9 (включительно),
	В зависимости от числа возвращает одну из строк:
	"Rock": 1, 2, 3
	"Paper": 4, 5, 6
	"Scissors": 7, 8, 9
	Если число = 0, то процесс повторяется.
*/
function getComputerChoice() {
	let randomValue = Math.floor(Math.random() * 10); // random value 0 to 9

	switch (randomValue) {
		case 1:
		case 2:
		case 3:
			return "rock";

		case 4:
		case 5:
		case 6:
			return "paper";

		case 7:
		case 8:
		case 9:
			return "scissors";

		case 0:
			return getComputerChoice();
	}
}

/* 
	Функция используется для проверки того, как часто компьютер
	выдаёт то или иное значение функцией getComputerChoice.
*/
function checkComputerChoiceSample() {
	let i = 0;
	let values = {
		Rock: 0,
		Paper: 0,
		Scissors: 0,
	};

	while (i < 1000000) {
		let value = getComputerChoice();
		values[value] += 1;
		i++;
	}

	return values;
}
