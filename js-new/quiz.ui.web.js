'use strict';

quiz.ui.web = {};

quiz.ui.web.chooseCategory = function () {
	var choise = $('#choise').val();
	quiz.questions = quiz.logic.shuffleQuestions(quiz.questions);
	quiz.logic.removeCategory(choise);
	//$('#category').hide();
	//$('#level1').show();
	//quiz.ui.web.askQuestion();
	//quiz.logic.removeQuestion();

};

quiz.ui.web.getAnswer = function () {
	return $('input:radio[name="choise"]:checked').val();
};

quiz.ui.web.askQuestion = function (questionNumber) {

	if (questionNumber !== undefined) {
		$('.currentQuestion').text(questionNumber + 1); //visar vilken fråga du är på
	}


	$('.question').text(quiz.questions[0].q);
	$('.alternatives').text(quiz.questions[0].c);
};



quiz.ui.web.level1 = function () {

	$('.level').hide();
	$('#level1').show();
	$('.currentQuestion').text(1);

	// if (questionNumber < 10) {
	// 	$('.currentQuestion').text(questionNumber + 1);
	// 	quiz.ui.web.askQuestion();
	// 	quiz.logic.removeQuestion();
	// 	//alert(questionNumber);
	// } else if (questionNumber === 10) {
	// 	$('#level1').hide();
	// 	$('#level2').show();
	// 	$('.currentQuestion').text(1);
	// }

};

quiz.ui.web.level2 = function () {
	$('.level').hide();
	$('#level2').show();
	$('.currentQuestion').text(1);

	/*	if (questionNumber < 10) {
		$('.currentQuestion').text(questionNumber + 1);
		quiz.ui.web.askQuestion();
		quiz.logic.removeQuestion();
	} else if (questionNumber === 10) {
		$('#level2').hide();
		$('#level3').show();
		$('.currentQuestion').text(1);
	}*/
};

quiz.ui.web.level3 = function () {
	$('.level').hide();
	$('#level3').show();
	$('.currentQuestion').text(1);

	/*if (questionNumber < 10) {
		$('.currentQuestion').text(questionNumber + 1);
		quiz.ui.web.askQuestion();
		quiz.logic.removeQuestion();
	} else if (questionNumber === 10) {
		$('#level3').hide();
		$('#level4').show();
		$('.currentQuestion').text(1);
	}*/
};

quiz.ui.web.level4 = function () {
	$('.level').hide();
	$('#level4').show();
	$('.currentQuestion').text(1);
	/*if (questionNumber < 10) {
		$('.currentQuestion').text(questionNumber + 1);
		quiz.ui.web.askQuestion();
		quiz.logic.removeQuestion();
	} else if (questionNumber === 10) {
		$('#level4').hide();
		$('#level5').show();
		$('.currentQuestion').text(1);
	}*/
};

quiz.ui.web.level5 = function () {
	$('.level').hide();
	$('#level5').show();
	$('.currentQuestion').text(1);
	/*	if (questionNumber < 10) {
		$('.currentQuestion').text(questionNumber + 1);
		quiz.ui.web.askQuestion();
		quiz.logic.removeQuestion();
	} else if (questionNumber === 10) {
		$('#level5').hide();
	}*/
};