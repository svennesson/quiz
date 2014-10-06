'use strict';

quiz.ui.web = {};

quiz.ui.web.chooseCategory = function () {
	var choise;

	$('#startGame').click(function () {
		choise = $('#choise').val();
		$('#category').hide();
		$('#level1').show();
		return choise;
	});
};

quiz.ui.web.askQuestion = function (question) {

	$('.question').text(question.q);
	$('.alternatives').text(question.c);

	/*

	var answer = prompt(question.q + question.c);
	answer = answer.trim();
	answer = Number(answer);
	return answer;

	*/
};