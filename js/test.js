var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var value;
var testTimeOver = false;
var userIdFromDb;
$(document).ready(function () {
	//prevent default
	$(".mail").submit(function(e){
    return false;
	});
//get typed in email and get userId
	$(this).find(".email").on("change", function () {
		var currentUser = $(document).find(".quizContainer > .mail > .email").val();	

		for(var i = 0; i < window.userFromDb.length; i++)
		{
		  if(window.userFromDb[i].emailAddress == currentUser)
		  {
			 userIdFromDb= window.userFromDb[i].idUsers;
			 break;
		  }
		}
				
	});
    //timern startar
    
    function isTimeOut(){
       
        testTimeOver = true;
        quizOver = true;
        console.log(testTimeOver);
        $(document).find(".nextButton").text("skicka in");
        alert("Tiden har tagit slut! Skicka in provet.");
    }
    setTimeout(isTimeOut, 360000);//360000




		
    // Display the first question
		displayCurrentQuestion();

    // On clicking next, display the next question
		       
    $(this).find(".nextButton").on("click", function () {
		//send data to db everytime you press next
		
			value = $("input[type='checkbox']:checked").val();
			
				
           
		
	if(testTimeOver==false){

        if (!quizOver) {

            
			if (value == window.questionfromdb[currentQuestion].CorrectAnswer) {
                    correctAnswers++;
                    
                }
			//save the choice to send it to db
				var studentsEmail = "ali@gmail.com";
			var tempAnswer=parseInt(value,10);
			var tempCurrentQuestion = parseInt(currentQuestion,10);
			var tempEmail = String(studentsEmail);
			var tempQuestionId = window.questionfromdb[currentQuestion].idQuestions;
			tempCurrentQuestion = tempCurrentQuestion+1;
			var tempScore = correctAnswers+'/'+ window.questionfromdb.length;
			
			console.log("correctAnswer from db",window.questionfromdb[currentQuestion].CorrectAnswer);
			console.log("chosen value",value);
			console.log("score",correctAnswers);
			
			var dataString ={Users_idUsers:userIdFromDb, Questions_idQuestions:tempQuestionId,
			user_answer:tempAnswer, score:tempScore};
			
			$.ajax({
				url: "api/question/write",
				type: "POST",
				dataType:'json',
				data: JSON.stringify(dataString),
				processData: false,
				contentType: "application/json"
				});
			
            if (value == undefined) {
                $(document).find(".message").text("Du måste göra ett val");
                $(document).find(".message").show();
            } else {
                // Remove any message
                $(document).find(".message").hide();

                

                currentQuestion++;
                if (currentQuestion < window.questionfromdb.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    
                    // Change the text in the next button to ask if user wants to send in the test
                    $(document).find(".nextButton").text("skicka in");
					
					$(this).find(".nextButton").on("click", function () {
					
					//to do: save test in db
                    quizOver = true;

                });
            }
                       

        }
	} else { // to do: send data to db
            
				}
	
	}else{
		//stoppa provet

	}
	
	});
			 
	
    });


function displayCurrentQuestion() {
    var question = window.questionfromdb[currentQuestion].QuestionText;
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
    
        $('<li class="myItem"><input type="checkbox" value=' + 0 + ' class="example" />' + 
		window.questionfromdb[currentQuestion].choice_no + '</li>').appendTo(choiceList);
		$('<li class="myItem"><input type="checkbox" value=' + 1 + ' class="example" />' + 
		window.questionfromdb[currentQuestion].choice_yes + '</li>').appendTo(choiceList);
	
	
	// only one checkbox checked
			$(".example").on("change", function() {

		    $(".example").not(this).prop("checked", false);  

			}); 
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Du klarade: " + correctAnswers + " av: " + window.questionfromdb.length);
    $(document).find(".quizContainer > .result").show();
}