'use strict';

quiz.bajs.play = function () {

	var points = 0;
	var countLevel = 1;
	var answer;
	var checkAnswer;
	var winOrLose;
	var totalPoints = 0;
	var checkPlay;
	var level;

	var levelsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	var category = quiz.ui.chooseCategory(); //om man vill ta bort en kategori med frågor
	var categoryChoise = quiz.logic.checkCategory(category); //kolla vilken kategori man har valt
	quiz.logic.removeCategory(categoryChoise); //tar bort den kategorin man har valt
	quiz.ui.startAlert();

	for (level = 0; level < 10; level++) { //for för vaje nivå

		var levelTest = quiz.logic.levelCheck(points, levelsArray[level]); //kollar om man har tillräckligt med poäng för nästa nivå
		points = 0; //sätts till noll för att räkna poäng per nivå

		if (levelTest === true) {
			for (var l = 0; l < 10; l++) { //l är vilken fråga i varje nivå
				quiz.questions = quiz.logic.shuffleQuestions(quiz.questions); //shufflar objekten/frågorna i arrayn
				checkAnswer = quiz.ui.askQuestion(quiz.questions[0]); //tar ut fråga 1 som är random
				answer = quiz.logic.checkAnswer(quiz.questions[0], checkAnswer); //kollar om svaret är rätt

				if (answer === true) {
					points = points + 1;
					quiz.ui.correctAnswer();
				} else {
					quiz.ui.wrongAnswer(quiz.questions[0]);
				}

				quiz.logic.removeQuestion(); //tar bort den frågan ur array questions
			}
			if (l === 10 && level < 9) {
				if (points >= countLevel) { //om du klarat nivån
					alert('Congratulations, you have made it to Level: ' + (countLevel + 1) + ' \nYou got ' + points + '/10 points\n\n' + 'You need ' + (countLevel + 1) + '/10 points to make it to the next level');
				} else {
					winOrLose = false;
				}
				countLevel++;
			}
			if (l === 10 && level === 9) {
				if (points >= countLevel) { //om du klarat nivå 10
					winOrLose = true;
				} else {
					winOrLose = false;
				}
			}
		}
		totalPoints = quiz.logic.addPoints(totalPoints, points); //räknar ihop totala poängen från varje nivå
	}

	quiz.ui.checkPoints(totalPoints); //visar hur många poäng man fått
	checkPlay = quiz.ui.askPlayAgain(winOrLose); //kollar om man vunnit eller förlorat
	quiz.logic.checkPlayAgain(checkPlay);
};

quiz.play();