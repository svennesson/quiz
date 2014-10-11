'use strict';

quiz.ui.web = {};

quiz.ui.web.chooseCategory = function () {
	var choise = $('#choise').val();
	quiz.questions = quiz.logic.shuffleQuestions(quiz.questions);
	quiz.logic.removeCategory(choise);
};

quiz.ui.web.getAnswer = function () {

	var answerValue = $('input:radio[name="choise"]:checked').val();

	if (isNaN(answerValue)) {
		answerValue = 0;
	}

	return answerValue;
};

quiz.ui.web.displayBold = function () {
	// var test = $('.alternatives').html();
	// alert(test);
	// test = test.replace('1)', '<b>)1</b>');
	// $('.alternatives').text(test);
	//var test = document.querySelector('.alternatives');
	//test.innerHtml = test.innerHtml.replace('1)', '<b>)1</b>');
	// var test = $('.alternatives');

	var test = $('.alternatives').text();
	alert(test);
};

quiz.ui.web.askQuestion = function (questionNumber) {
	if (questionNumber !== undefined) {
		$('.currentQuestion').text(questionNumber + 1); //visar vilken fråga du är på
	}

	//quiz.ui.web.displayBold();

	$('.question').text(quiz.questions[0].q);
	$('.alternatives').text(quiz.questions[0].c);
};

quiz.ui.web.level1 = function () {
	$('.level').hide();
	$('.currentQuestion').text(1);
	$('#level1').show();
	$('#levelIcon1').toggleClass('levelActive');
	$('.showAnswer').text('You need 2/10 points');
};

quiz.ui.web.level2 = function (points) {
	$('.level').hide();
	$('.currentQuestion').text(1);
	$('#level2').show();
	$('#levelIcon1').toggleClass('levelActive');
	$('#levelIcon2').toggleClass('levelActive');
	$('.showPoints').text('You got ' + points + ' points');

	setTimeout(function () {
		$('.showPoints').text('');
	}, 2000);

	$('.showAnswer').text('You need 4/10 points');
};

quiz.ui.web.level3 = function (points) {
	$('.level').hide();
	$('#level3').show();
	$('.currentQuestion').text(1);
	$('#levelIcon2').toggleClass('levelActive');
	$('#levelIcon3').toggleClass('levelActive');
	$('.showPoints').text('You got ' + points + ' points');

	setTimeout(function () {
		$('.showPoints').text('');
	}, 2000);

	$('.showAnswer').text('You need 6/10 points');
};

quiz.ui.web.level4 = function (points) {
	$('.level').hide();
	$('#level4').show();
	$('.currentQuestion').text(1);
	$('#levelIcon3').toggleClass('levelActive');
	$('#levelIcon4').toggleClass('levelActive');
	$('.showPoints').text('You got ' + points + ' points');

	setTimeout(function () {
		$('.showPoints').text('');
	}, 2000);

	$('.showAnswer').text('You need 8/10 points');
};

quiz.ui.web.level5 = function (points) {
	$('.level').hide();
	$('#level5').show();
	$('.currentQuestion').text(1);
	$('#levelIcon4').toggleClass('levelActive');
	$('#levelIcon5').toggleClass('levelActive');
	$('.showPoints').text('You got ' + points + ' points');

	setTimeout(function () {
		$('.showPoints').text('');
	}, 2000);

	$('.showAnswer').text('You need 10/10 points');
};

quiz.ui.web.displayAnswer = function (bool) {
	if (bool === true) {
		$('.showAnswer').text('Correct answer');
		$('.showAnswer').addClass('showAnswerCorrect');
		setTimeout(function () {
			$('.showAnswer').text('');
			$('.showAnswer').removeClass('showAnswerCorrect');
		}, 2000);

	} else {
		$('.showAnswer').text('Wrong answer');
		$('.showAnswer').addClass('showAnswerWrong');
		setTimeout(function () {
			$('.showAnswer').text('');
			$('.showAnswer').removeClass('showAnswerWrong');
		}, 2000);
	}
};

quiz.ui.web.diplayResult = function () {
	$('.level').hide();
	$('#result').show();
};