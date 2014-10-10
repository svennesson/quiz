quiz.play = function () {

	'use strict';

	var questionNumber = 0;
	var questionCount = 0;

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
			quiz.logic.removeQuestion();
			quiz.ui.web.askQuestion(questionCount);
		}

		if (questionCount === 10) {
			questionCount = 0;
		}

		//alert(answerBool);

		quiz.logic.nextLevel(questionNumber);

		questionNumber = questionNumber + 1;
		questionCount = questionCount + 1;
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