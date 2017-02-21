var questions = [{
    questionText: "Är ödlor små?",
    choices: ["Nej", "Ja"],
    correctAnswer: 1
}, {
    questionText: "Behöver du muskler för att kunna röra dig?",
    choices: ["Nej", "Ja"],
    correctAnswer: 1
}, {
    questionText: "Kan du borsta tänderna med en sko?",
    choices: ["Nej", "Ja"],
    correctAnswer: 0
}, {
    questionText: "Kan en ryggsäck bli förkyld?",
    choices: ["Nej", "Ja"],
    correctAnswer: 0
}, {
    questionText:  "Kan papegojor prata?",
    choices: ["Nej", "Ja"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var saveChoice = new Array();
var saveId;
$(document).ready(function () {
		//to do: get user
		 
		//unique id for test
			saveId = uniqueId();
		
			
    // Display the first question
    displayCurrentQuestion();
	
    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='checkbox']:checked").val();
			
			//save the choice to send it to db
			saveChoice.push(value);
			console.log(saveChoice);
			
            if (value == undefined) {
                $(document).find(".message").text("Du måste göra ett val");
                $(document).find(".message").show();
            } else {
                // Remove any message
                $(document).find(".message").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    
                    // Change the text in the next button to ask if user wants to send in the test
                    $(document).find(".nextButton").text("skicka in");
					//to do: save test in db
                    quizOver = true;
                }
            }
        } else { // to do: send data to db
            
        }
    });

});


function displayCurrentQuestion() {

    var question = questions[currentQuestion].questionText;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
	//questionnumber
	if(currentQuestion==0){
		$(document).find(".quizContainer > .questionnr").text("Fråga 1 av " + questions.length);
		$(document).find(".quizContainer > .questionnr").show();
	} else {
		let temp = parseInt(currentQuestion,10);
			temp = temp+1;
	$(document).find(".quizContainer > .questionnr").text("Fråga " + temp + " av " + questions.length);
    $(document).find(".quizContainer > .questionnr").show();
	}
    
    for (i = 0; i < numChoices; i++) {
        let choice = questions[currentQuestion].choices[i];
        $('<li><input type="checkbox" value=' + i + ' class="example" />' + choice + '</li>').appendTo(choiceList);
    }
	
	// only one checkbox checked
			$(".example").on("change", function() {

		    $(".example").not(this).prop("checked", false);  

			});
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Du klarade: " + correctAnswers + " av: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function uniqueId() {
	var id = Math.round(new Date().getTime() + (Math.random() * 1000));
	
  return id;
  
}