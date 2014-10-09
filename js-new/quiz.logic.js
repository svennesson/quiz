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

	//Number(answer);
	answer = parseInt(answer, 10);
	//alert(answer);
	//alert(question.a);
	console.log(answer);
	console.log(question.a);
	console.log(question.c);

	if (question.a === answer) {
		checkAnswerBool = true;
	} else {
		checkAnswerBool = false;
	}

	alert(checkAnswerBool);

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

quiz.logic.nextLevel = function (questionNumber) {
	// if (questionNumber === 10) {
	// 	quiz.ui.web.level2();
	// }
	// if (questionNumber === 20) {
	// 	quiz.ui.web.level3();
	// }
	// if (questionNumber === 30) {
	// 	quiz.ui.web.level4();
	// }
	// if (questionNumber === 40) {
	// 	quiz.ui.web.level5();
	// }
	// if (questionNumber === 50) {
	// 	//sut, grattis!
	// }

	if (questionNumber === 1) {
		quiz.ui.web.level1();
	} else if (questionNumber === 10) {
		quiz.ui.web.level2();
	} else if (questionNumber === 20) {
		quiz.ui.web.level3();
	} else if (questionNumber === 30) {
		quiz.ui.web.level4();
	} else if (questionNumber === 40) {
		quiz.ui.web.level5();
	} else {
		//du vann
	}

};