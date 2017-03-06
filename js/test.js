var currentQuestion;
if(!currentQuestion){
	currentQuestion=0;
}
localStorage.setItem("currentQuestion",currentQuestion);
var correctAnswers;
if(!correctAnswers){
correctAnswers = 0;
}
localStorage.setItem("correctAnswers",correctAnswers);
window.questionfromdb=window.questionfromdb||[];
var tempScore = correctAnswers+'/'+ window.questionfromdb.length;
var quizOver = false;
var value = null;
var testTimeOver = false;
var userIdFromDb;
var currentUser;
var emailExist = false;


$(document).ready(function () {
	$(this).find(".quizContainer").hide();
	$(this).find(".alert-danger").hide();
	$(this).find(".alert-warning").hide();
	//prevent default
	$(".mail").submit(function(e){
    	return false;
	});

//get typed in email and get userId and starts timer
$(document).find(".startaTest > .mail > .emailButton").on("click", function () {
		currentUser="";
		if(!currentUser){
		currentUser = $(document).find(".email").val();
		}
		
		localStorage.setItem("currentUser",currentUser);
		for(var i = 0; i < window.userFromDb.length; i++)
		{
		  if(window.userFromDb[i].emailAddress == currentUser)
		  {
			 userIdFromDb= window.userFromDb[i].idUsers;
			 emailExist=true;
			 break;
		  }
		}
		if (emailExist==false){
			console.log(emailExist);
			$(document).find(".alert-danger").text("Du måste skriva en registrerad epostadress i fältet.");
			$(document).find(".alert-danger").show();
		}else{

		//check if user alredy completed test
		var done=false;
		for(let i = 0;i<window.userDoneTest.length;i++){
			
			if(window.userDoneTest[i].idUser == userIdFromDb){
				
				 done = true;
			}
		}
		
		if(done == false){
			
		if(currentUser){
			
		$(document).find(".quizContainer").show();
		$(document).find(".mail").hide();
		$(document).find(".alert-success").hide();
		$(document).find(".alert-danger").hide();
		$(document).find(".alert-warning").show();
		 
		 
		var start = 60;

		setTimeout(isTimeOut, 3600000);
		$(".timerMsg").text(start + " minuter kvar av testtiden.");
		setInterval(function() {
		$(".timerMsg").text(start + " minuter kvar av testtiden.");
    	start = start - 1;
	}, 60000);

    }else{
		$(document).find(".alert-danger").text("Du måste skriva in en email");
		$(document).find(".alert-danger").show();
		}

		}else{
			
		$(document).find(".alert-danger").text("man får bara göra provet en gång");
		$(document).find(".alert-danger").show();
		}}
			});
    // Display the first question
		displayCurrentQuestion();

    // On clicking next, display the next question
	
		       
    $(this).find(".nextButton").on("click", function () {
		value = $("input[type='checkbox']:checked").val();
		//send data to db everytime you press next
	if(!testTimeOver){

        if (!quizOver) {
			
			
 if (!value) {
 $(document).find(".message").text("Du måste göra ett val");
 $(document).find(".message").show();
    }else {
		// Remove any message
        $(document).find(".message").hide();
		
			if (value == window.questionfromdb[currentQuestion].CorrectAnswer) {
                    correctAnswers++;
					localStorage.setItem("correctAnswers",correctAnswers);
					// displayCurrentQuestion();
                }
			  
						sendToDb();
						currentQuestion++;
						localStorage.setItem("currentQuestion",currentQuestion);
						displayCurrentQuestion();
				}
				
		}

			
		
	}else{
 
    //test is over, you ran out of time
 
			displayScore();
			quizOver = true;
         //  send in the test and display message
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
	
	if(currentQuestion == (window.questionfromdb.length)){
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
				
	 });
		});

	function isTimeOut(){
   
	testTimeOver = true;
	quizOver = true;
	$(".timerMsg").hide();
	$(document).find(".alert-success").hide();
	$(document).find(".alert-danger").show();
	$(document).find(".alert-warning").hide();
	$(document).find(".nextButton").hide();
	$(document).find(".message").show();
	$(document).find(".message").text("Provet är slut och har skickats in!");
	}
function sendToDb(){
		
		//save the choice to send it to db
			var tempAnswer=parseInt(value,10);
			var tempCurrentQuestion = parseInt(currentQuestion,10);
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
