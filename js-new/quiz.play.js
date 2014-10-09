quiz.play = function () {

	'use strict';

	var questionNumber = 0;

	var showStartPage = function () {
		$('.level').hide();
		$('#category').show();
	};

	showStartPage();

	//$('#startGame').on('click', quiz.ui.web.chooseCategory);

	$('.nextButton').on('click', function () {

		if (questionNumber === 0) {
			quiz.ui.web.chooseCategory();
		}

		if (questionNumber !== 0) {
			quiz.ui.web.askQuestion(questionNumber);

			var test = quiz.ui.web.getAnswer();
			var answerBool = quiz.logic.checkAnswer(quiz.questions[0], test);
			//alert(answerBool);
			quiz.logic.removeQuestion();
			quiz.logic.nextLevel(questionNumber);

		}

		questionNumber = questionNumber + 1;
		//alert(questionNumber);
	});

	/*

	$('#nextButton1').on('click', function () {
		currentQuestion = currentQuestion + 1;
		quiz.ui.web.level1(currentQuestion);

		if (currentQuestion === 10) {
			currentQuestion = 0;
		}
	});



	$('#nextButton2').on('click', function () {
		currentQuestion = currentQuestion + 1;
		quiz.ui.web.level2(currentQuestion);

		if (currentQuestion === 10) {
			currentQuestion = 0;
		}
	});

	$('#nextButton3').on('click', function () {
		currentQuestion = currentQuestion + 1;
		quiz.ui.web.level3(currentQuestion);

		if (currentQuestion === 10) {
			currentQuestion = 0;
		}
	});

	$('#nextButton4').on('click', function () {
		currentQuestion = currentQuestion + 1;
		quiz.ui.web.level4(currentQuestion);

		if (currentQuestion === 10) {
			currentQuestion = 0;
		}
	});

	$('#nextButton5').on('click', function () {
		currentQuestion = currentQuestion + 1;
		quiz.ui.web.level5(currentQuestion);

		if (currentQuestion === 10) {
			currentQuestion = 0;
		}
	});
	//$('#nextButton1').on('click', quiz.ui.web.nextQuestion);

	*/

};

quiz.play();