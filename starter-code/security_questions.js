console.log("security_questions.js loaded");
var securityQuestions = [{
	question: 'Where are you from' , expectedAnswer: 'china'},
	{question: 'What was your first pet' , expectedAnswer: 'dog'},
	{question: 'What is your favorite color' , expectedAnswer: 'purple'

}]

for (var i = 0; i < securityQuestions.length; i++){
	var userAnswer;
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert('Wrong answer');
		break;

	}

}
