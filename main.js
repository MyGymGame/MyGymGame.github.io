
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correct = 0;



	if (question1 == "no") {
		correct++;
        }	
	if (question2 == "no") {
		correct++;
	}
        if (question3 == "yes") {
		correct++;
	}
         
        if (question4 == "2") {
		correct++;
	}

	if (question5 == "no") {
		correct++;
	}

	if (question6 == "no") {
		correct++;
	}

	if (question7 == "no") {
		correct++;
	}

	if (question8 == "no") {
		correct++;
	}

	if (question9 == "2") {
		correct++;
	}

	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct > 6 && correct < 10) {
		score = 0;
	}
	
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
	
