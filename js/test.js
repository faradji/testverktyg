var currentQuestion;
localStorage.setItem("currentQuestion",currentQuestion);
var correctAnswers;
if(correctAnswers == null){
correctAnswers = 0;
}
localStorage.setItem("correctAnswers",correctAnswers);
window.questionfromdb=window.questionfromdb||[];
var tempScore = correctAnswers+'/'+ window.questionfromdb.length;
var quizOver = false;
var value;
var testTimeOver = false;
 
$(document).ready(function () {
	//prevent default
	$(".mail").submit(function(e){
    return false;
	});
//get typed in email and get userId and starts timer
	$(this).find(".email").on("change", function () {
		if(currentUser == null){
		var currentUser = $(document).find(".quizContainer > .mail > .email").val();
		}			
		localStorage.setItem("currentUser",currentUser);
		for(var i = 0; i < window.userFromDb.length; i++)
		{
		  if(window.userFromDb[i].emailAddress == currentUser)
		  {
			 userIdFromDb= window.userFromDb[i].idUsers;
			 break;
		  }
		}
		 setTimeout(isTimeOut, 360000);//360000
				
	});

   



			if(currentQuestion==null){
				currentQuestion=0;
			}
		
    // Display the first question
		displayCurrentQuestion();

    // On clicking next, display the next question
		       
    $(this).find(".nextButton").on("click", function () {
		//send data to db everytime you press next
		
			value = $("input[type='checkbox']:checked").val();
			
				//save the choice to send it to db
			var studentsEmail = "ali@gmail.com";
			var tempAnswer=parseInt(value,10);
			var tempCurrentQuestion = parseInt(currentQuestion,10);
			var tempEmail = String(studentsEmail);
			var tempQuestionId = window.questionfromdb[currentQuestion].idQuestions;
			tempCurrentQuestion = tempCurrentQuestion+1;
			var tempScore = correctAnswers+'/'+ window.questionfromdb.length;
			
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
			
           
		
	if(testTimeOver==false){

        if (!quizOver) {
			if (value == window.questionfromdb[currentQuestion].CorrectAnswer) {
                    correctAnswers++;
					localStorage.setItem("correctAnswers",correctAnswers);
                }
			
            if (value == undefined) {
                $(document).find(".message").text("Du måste göra ett val");
                $(document).find(".message").show();
            } else {
                // Remove any message
                $(document).find(".message").hide();
				currentQuestion++;
				localStorage.setItem("currentQuestion",currentQuestion);
			}
                if (currentQuestion < window.questionfromdb.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
					quizOver = true;
                    //  send in the test and display message
			$(document).find(".nextButton").hide();
				console.log("button har ändrats");
			$(document).find(".message").text("Provet är slut och har skickats in!");
			$(document).find(".message").show();
			var dataString ={Users_idUsers:userIdFromDb, Questions_idQuestions:null,
			user_answer:null, score:tempScore};
			$.ajax({
				url: "api/question/write",
				type: "POST",
				dataType:'json',
				data: JSON.stringify(dataString),
				processData: false,
				contentType: "application/json"
 
              });
			  }
		}
	}else{
 
    //test is over, you ran out of time
 
			displayScore();
			quizOver = true;
         //  send in the test and display message
          $(document).find(".nextButton").hide();
          $(document).find(".message").text("Tiden är slut och provet har skickats in!");
          $(document).find(".message").show();
          var dataString ={Users_idUsers:userIdFromDb, Questions_idQuestions:null,
          user_answer:null, score:tempScore};
            $.ajax({
              url: "api/question/write",
              type: "POST",
              dataType:'json',
              data: JSON.stringify(dataString),
              processData: false,
              contentType: "application/json"
              });
              console.log("ajax har körts");
 	}
	});
		});
		
		    //timern startar
    
    function isTimeOut(){
       
        testTimeOver = true;
        quizOver = true;
    }


function displayCurrentQuestion() {
    var question ="";
	if((currentQuestion || currentQuestion==0)&& window.questionfromdb[currentQuestion] && window.questionfromdb[currentQuestion].QuestionText){
		question=window.questionfromdb[currentQuestion].QuestionText;
	}
	else{
		return;
	}
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
    if(window.questionfromdb[currentQuestion].choice_no && window.questionfromdb[currentQuestion].choice_yes){
    $('<li class="myItem"><input type="checkbox" value=' + 0 + ' class="example" />  ' + 
		window.questionfromdb[currentQuestion].choice_no + '</li>').appendTo(choiceList);
	$('<li class="myItem"><input type="checkbox" value=' + 1 + ' class="example" />  ' + 
		window.questionfromdb[currentQuestion].choice_yes + '</li>').appendTo(choiceList);

	}
	
	// only one checkbox checked
			$(".example").on("change", function() {

		    $(".example").not(this).prop("checked", false);  

			}); 
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Du klarade: " + correctAnswers + " av: " + window.questionfromdb.length);
    $(document).find(".quizContainer > .result").show();
}