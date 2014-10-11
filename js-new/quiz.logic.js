'use strict';

quiz.logic = {};

/*   quiz.logic.levelsArray = (function () {
	var levelsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}());   */

quiz.logic.checkCategory = function (choise) {
	var categoryChoise;

	switch (choise) {
	case 0:
		break;
	case 1:
		categoryChoise = 'sport';
		break;
	case 2:
		categoryChoise = 'geography';
		break;
	case 3:
		categoryChoise = 'general';
		break;
	case 4:
		categoryChoise = 'children';
		break;
	case 5:
		categoryChoise = 'history';
		break;
	default:
		break;
	}
	return categoryChoise;
};

quiz.logic.removeCategory = function (choiseCategory) {
	for (var i = 0; i < quiz.questions.length; i++) {
		if (quiz.questions[i].category === choiseCategory) {
			quiz.questions.splice(i, 1);
			i--;
		}
	}
};

quiz.logic.checkAnswer = function (question, answer) {
	var checkAnswerBool;

	answer = parseInt(answer, 10);

	console.log('your answer: ' + answer);
	console.log('correct answer: ' + question.a);
	console.log(question.c);

	if (question.a === answer) {
		checkAnswerBool = true;
	} else {
		checkAnswerBool = false;
	}

	return checkAnswerBool;
};

quiz.logic.shuffleQuestions = function (list) {
	list = _.shuffle(list);
	return list;
};

quiz.logic.removeQuestion = function () {
	quiz.questions.shift();
};

quiz.logic.addPoints = function (totalPoints, points) {
	totalPoints = totalPoints + points;
	return totalPoints;
};

quiz.logic.levelCheck = function (points, levels) {
	var nextLevelBool;

	if (points >= levels) {
		nextLevelBool = true;
	} else {
		nextLevelBool = false;
	}
	return nextLevelBool;
};

quiz.logic.checkPlayAgain = function (answer) {
	if (answer === 'y' || answer === 'yes') {
		//quiz.play(); //kom ihåg att skapa quiz.play eller ändra den här raden
		location.reload();
	}
};

quiz.logic.currentQuestion = function (number) {
	number = number + 1;
	return number;
};

quiz.logic.nextLevel = function (questionNumber, points) {
	if (questionNumber === 0) {
		quiz.ui.web.level1();
	} else if (questionNumber === 10) {
		if (points > 1) {
			quiz.ui.web.level2(points);
		} else {
			questionNumber = 100;
		}
	} else if (questionNumber === 20) {
		if (points > 3) {
			quiz.ui.web.level3(points);
		} else {
			questionNumber = 100;
		}
	} else if (questionNumber === 30) {
		if (points > 5) {
			quiz.ui.web.level4(points);
		} else {
			questionNumber = 100;
		}
	} else if (questionNumber === 40) {
		if (points > 7) {
			quiz.ui.web.level5(points);
		} else {
			questionNumber = 100;
		}
	} else if (questionNumber === 50) {
		if (points > 9) { //you win
			//$('#endResult').text('You Win!');
			//quiz.ui.web.displayResult();
			$('.level').hide();
			$('#endResult').text('You Win!');
			$('#result').show();
		} else {
			questionNumber = 100;
		}
	}
	if (questionNumber === 100) { //you loose
		//$('#endResult').text('You Loose!');
		//quiz.ui.web.displayResult();
		$('.level').hide();
		$('#endResult').text('You Loose!');
		$('#result').show();
	}
};

quiz.logic.addPoints = function (points, bool) {
	if (bool === true) {
		points = points + 1;
	}

	return points;
};