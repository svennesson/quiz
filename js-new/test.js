quiz.test = function () {

	'use strict';

	var showStartPage = function () {
		$('.level').hide();
		$('#category').show();
	};

	showStartPage();
	quiz.ui.web.chooseCategory();
	quiz.ui.web.askQuestion(quiz.questions[0]);

};

quiz.test();