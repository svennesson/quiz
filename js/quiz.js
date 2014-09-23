console.log('Quiz');

var totalPoints = 0;
var points = 0;
var answer;
var winOrLose;
var level;
var playAgain;

var levelsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var chooseCategory = function () {
	var category = true;
	var choise;

	while (category === true) {
		choise = prompt('Do you want to remove any cetegory?\n\n' +
			'0) No thanks \n' +
			'1) Sport \n' +
			'2) Geography \n' +
			'3) General \n' +
			'4) Children \n' +
			'5) History');
		choise = Number(choise);

		switch (choise) {
		case 0:
			category = false;
			break;
		case 1:
			choise = 'sport';
			category = false;
			break;
		case 2:
			choise = 'geography';
			category = false;
			break;
		case 3:
			choise = 'general';
			category = false;
			break;
		case 4:
			choise = 'children';
			category = false;
			break;
		case 5:
			choise = 'history';
			category = false;
			break;
		}
	}
	return choise;
};

var removeCategory = function (choise) {

	for (var i = 0; i < questions.length; i++) {
		if (questions[i].category === choise) {
			questions.splice(i, 1);
			i--;
			// alert('hittade objektet ' + choise);
		}
	}
};

var askQuestion = function (question) {
	var answer = prompt(question.q + question.c);
	answer = answer.trim();
	answer = Number(answer);
	return answer;
};

var checkAnswer = function (question, answer) {

	if (answer === question.a) {
		alert('Correct');
		points = points + 1;
	} else {
		alert('Wrong answer.\n\n' + question.c + '\n\nThe correct answer was: ' + question.a);

	}
};

var shuffleQuestions = function (list) {
	questions = _.shuffle(list);
};

var removeQuestion = function () {
	questions.shift();
};

var checkPoints = function () {
	alert('You got ' + totalPoints + ' points');
};

var addPoints = function (points) {
	totalPoints = totalPoints + points;
	return totalPoints;
};

var levelCheck = function (points, levels) {
	var nextLevelBool;

	if (points >= levels) {
		nextLevelBool = true;
	} else {
		nextLevelBool = false;
	}
	return nextLevelBool;
};

var checkWinOrLose = function (resultBool) {
	if (resultBool !== true) {
		playAgain = prompt('Game over, do you want to play again?');
		if (playAgain === 'y' || playAgain === 'yes') {
			runGame();
		}
	} else {
		alert('You win! Do you want to play again?');
		if (playAgain === 'y' || playAgain === 'yes') {
			runGame();
		}
	}
};

var runGame = function () {

	var countLevel = 1;
	var category = chooseCategory(); //om man vill ta bort en kategori med frågor
	removeCategory(category); //tar bort den kategorin man har valt
	alert('You need 1/10 points to make it to the next level');

	for (level = 0; level < 10; level++) { //for för vaje nivå

		var levelTest = levelCheck(points, levelsArray[level]); //kollar om man har tillräckligt med poäng för nästa nivå
		points = 0; //sätts till noll för att räkna poäng per nivå

		if (levelTest === true) {
			for (var l = 0; l < 10; l++) { //l är vilken fråga i varje nivå
				shuffleQuestions(questions); //shufflar objekten/frågorna i arrayn
				answer = askQuestion(questions[0]); //tar ut fråga 1 som är random
				checkAnswer(questions[0], answer); //kollar om svaret är rätt
				removeQuestion(); //tar bort den frågan ur array questions
			}
			if (l === 10 && level < 9) {
				if (points >= countLevel) { //om du klarat nivån
					alert('Congratulations, you have made it to Level: ' + (countLevel + 1) + ' \nYou got ' + points + '/10 points\n\n' + 'You need ' + (countLevel + 1) + '/10 points to make it to the next level');
				} else {
					winOrLose = false;
				}
				countLevel++;
			}

			if (l === 10 && level === 9) {
				if (points >= countLevel) { //om du klarat nivå 10
					winOrLose = true;
				} else {
					winOrLose = false;
				}
			}
		} else {}

		addPoints(points); //räknar ihop totala poängen från varje nivå
	}

	checkWinOrLose(winOrLose); //kollar om man vunnit eller förlorat
	checkPoints(); //visar hur många poäng man fått
};

runGame(); //kör spelet genom funktionen runGame()