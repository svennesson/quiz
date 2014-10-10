quiz.play = function () {

	'use strict';

	var questionNumber = 0;
	var questionCount = 0;
	var points = 0;
	var totalPoints = 0;

	var showStartPage = function () {
		$('.level').hide();
		$('#category').show();
	};

	showStartPage();

	//$('#startGame').on('click', quiz.ui.web.chooseCategory);

	$('.nextButton').on('click', function () {


		if (questionNumber === 0) {
			quiz.ui.web.chooseCategory();
			quiz.ui.web.askQuestion(questionNumber);
		}

		if (questionNumber !== 0) {
			var answer = quiz.ui.web.getAnswer();
			var answerBool = quiz.logic.checkAnswer(quiz.questions[0], answer);

			points = quiz.logic.addPoints(points, answerBool);
			quiz.ui.web.displayAnswer(answerBool); //fel eller rätt svar
			// if (answerBool === true) {
			// 	points = points + 1;
			// 	quiz.ui.web.correctAnswer(); //skapa den här smartass
			// }

			quiz.logic.removeQuestion();
			quiz.ui.web.askQuestion(questionCount);
		}

		if (questionCount === 10) {
			questionCount = 0;
			//totalPoints = totalPoints + points;
			//points = 0;
		}

		//alert(answerBool);

		quiz.logic.nextLevel(questionNumber);

		questionNumber = questionNumber + 1;
		questionCount = questionCount + 1;


		//alert(points);
		//alert(questionNumber);
	});



};

quiz.play();