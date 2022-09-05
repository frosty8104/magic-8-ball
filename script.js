$(document).ready(function() {

var magic8Ball = { };

magic8Ball.listOfAnswers = ["Outlook good", "It is certain", "Yes", "Without a doubt", "Ask again later", "Cannot predict now", "Very doubtful", "Don't count on it"];

$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];

$("#answer").text( answer );

	console.log(question);
	console.log(answer);
};

$("#answer").hide();

var onClick = function() {

$("#answer").fadeIn(4000);

    var question = prompt("ASK A YES/NO QUESTION!");
    magic8ball.askQuestion(question);
$("#8Ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
};

$("#questionButton").click(onClick );
$("#answer").hide();

$("#8ball").effect( "shake" );

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	
  setTimeout (
	function () {
	  var question = prompt("Ask ayes or no question");
	  magic8Ball.askQuestion(question);
	}, 500);

});