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

                if (value == window.questionfromdb[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < window.questionfromdb.length) {
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
		window.saveChoiceString = JSON.stringify(saveChoice);
		console.log('spara som string efter test',saveChoiceString);
            
        }
    });

});


function displayCurrentQuestion() {
    var question = window.questionfromdb[currentQuestion].questionText;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
   // var numChoices = window.questionfromdb[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
	//questionnumber
	if(currentQuestion==0){
		$(document).find(".quizContainer > .questionnr").text("Fråga 1 av " + window.questionfromdb.length);
		$(document).find(".quizContainer > .questionnr").show();
	} else {
		let temp = parseInt(currentQuestion,10);
			temp = temp+1;
	$(document).find(".quizContainer > .questionnr").text("Fråga " + temp + " av " + window.questionfromdb.length);
    $(document).find(".quizContainer > .questionnr").show();
	}
    
   // for (i = 0; i < numChoices; i++) {
    //    let choice = window.questionfromdb[currentQuestion].choices[i];
        $('<li><input type="checkbox" value=' + 0 + ' class="example" />' + window.questionfromdb[currentQuestion].choice_one + '</li>').appendTo(choiceList);
		$('<li><input type="checkbox" value=' + 1 + ' class="example" />' + window.questionfromdb[currentQuestion].choice_two + '</li>').appendTo(choiceList);
	
  // }
	
	// only one checkbox checked
			$(".example").on("change", function() {

		    $(".example").not(this).prop("checked", false);  

			}); 
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Du klarade: " + correctAnswers + " av: " + window.questionfromdb.length);
    $(document).find(".quizContainer > .result").show();
}

function uniqueId() {
	var id = Math.round(new Date().getTime() + (Math.random() * 1000));
	
  return id;
  
}