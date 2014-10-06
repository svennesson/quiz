quiz.test = function () {

	'use strict';

	$('.level').hide();
	$('#category').show();



	$('#startGame').click(function () {
		var test = $('#choise').val();
		alert(test);
		alert('hejsan');
	});


};

quiz.test();