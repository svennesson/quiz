'use strict';

quiz.ui = {};
quiz.ui.chooseCategory = function () {
	var choise;

	choise = prompt('Do you want to remove any cetegory?\n\n' +
		'0) No thanks \n' +
		'1) Sport \n' +
		'2) Geography \n' +
		'3) General \n' +
		'4) Children \n' +
		'5) History');
	choise = Number(choise);
	return choise;
};

quiz.ui.startAlert = function () {
	alert('You need 1/10 points to make it to the next level');
};

quiz.ui.askQuestion = function (question) {
	var answer = prompt(question.q + question.c);
	answer = answer.trim();
	answer = Number(answer);
	return answer;
};

quiz.ui.correctAnswer = function () {
	alert('Correct answer');
};

quiz.ui.wrongAnswer = function (question) {
	alert('Wrong answer.\n\n' + question.c + '\n\nThe correct answer was: ' + question.a);
};

quiz.ui.askPlayAgain = function (resultBool) {

	var playAgain;

	if (resultBool !== true) {
		playAgain = prompt('Game over, do you want to play again?');
	} else {
		playAgain = prompt('You win! Do you want to play again?');
	}

	return playAgain;
};

quiz.ui.checkPoints = function (totalPoints) {
	alert('You got ' + totalPoints + ' points');
};