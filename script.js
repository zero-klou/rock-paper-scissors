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

function getHumanChoice() {
	value = prompt("Введите 'Rock', 'Paper' или 'Scissors'", "Scissors");
	return value ? value.toLowerCase() : "";
}

/* 
	Сперва функция проверяет, раунд на ничью.
	Затем мы сравниваем выбор компьютера и человека и определяем, победил ли человек.
	На основе этого считаем очки и выводим сообщение.
*/

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
	}

	function playRound(humanChoice, computerChoice) {
		if (humanChoice == computerChoice) {
			console.log("draw");
			return;
		}

		let isHumanWin = false;

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
		}

		if (isHumanWin) {
			humanScore++;
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		} else {
			computerScore++;
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		}
	}

	return `Вы: ${humanScore} | Компьютер: ${computerScore}`;
}

console.log(playGame());
