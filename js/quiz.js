console.log('Quiz');

var totalPoints = 0;
var points = 0;
var answer;
var winOrLose;

var levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var chooseCategory = function () {
	var category = true;
	var choise;

	while (category === true) {
		choise = prompt('Do you want to remove any cetegory?\n\n' +
			'0) NO THANXXXX \n' +
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
		alert('Wrong answer');
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
		alert('Game over');
	} else {
		alert('You win!!!!!!!!!!!!');
	}
};

var runGame = function () {

	var countLevel = 1;
	var category = chooseCategory();
	removeCategory(category);
	alert('You need 1/10 points to make it to the next level');

	for (var j = 0; j < 3; j++) { //for för vaje nivå

		var levelTest = levelCheck(points, levels[j]);
		points = 0;

		if (levelTest === true) {
			for (var l = 0; l < 10; l++) {
				shuffleQuestions(questions);
				answer = askQuestion(questions[0]);
				checkAnswer(questions[0], answer);
				removeQuestion();
			}
			if (l === 10 && j < 2) {
				if (points >= countLevel) { //om du klarat nivån
					alert('Congratulations, you have made it to Level: ' + (countLevel + 1) + ' \nYou got ' + points + '/10 points\n\n' + 'You need ' + (countLevel + 1) + '/10 points to make it to the next level');
					winOrLose = true;
				} else {
					winOrLose = false;
				}
				countLevel++;
			}

		} else {}
		addPoints(points);
	}

	checkWinOrLose(winOrLose);
	checkPoints();
};

runGame();