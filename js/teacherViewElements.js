$(document).ready(function () {
var divElement = $(document).find(".teacherElements"); 
var divElementDoneTest = $(document).find(".doneTest");

 $(document).find(divElementDoneTest).hide();
	//finds done tests and displays them under the name
	for(let i = 0; i < window.userFromDb.length; i++)
	{	
		for(let j = 0; j < window.answersFromDb.length; j++)
		{
			if(window.answersFromDb[j].Users_idUsers == window.userFromDb[i].idUsers ){
			
		  $('<a href="" class="list-group-item linkToTest" id="'+window.userFromDb[i].idUsers+'">' + window.userFromDb[i].firstName + ' ' +
		  window.userFromDb[i].lastName + ': '+ window.userFromDb[i].class+
		  '</a>').appendTo(divElement);
			break;
			}	
		}
  }
  
  	//display chosen test

	
   $(this).find(".linkToTest").on("click", function (event) {
		event.preventDefault();
	    $(document).find(divElementDoneTest).empty();
		$(document).find(divElementDoneTest).show();
		var contentPanelId = $(this).attr("id");
		 
	var j = 0;
	for(let i = 0; i < window.answersFromDb.length; i++)
	{
		//todo förbättra denna condition.
		
		//only show answers from the chosen user
		if(window.answersFromDb[i].Users_idUsers == contentPanelId){
		// if we're not on the last post in array then
		if(j != window.questionfromdb.length){
			
			
			 // $('<a href="" class="list-group-item linkToTest" id="'+window.userFromDb[i].idUsers+'">'
			 // + window.userFromDb[i].firstName + ' ' +
		  // window.userFromDb[i].lastName + ': '+ window.userFromDb[i].class+
		  // '</a>').appendTo(divElement);
				
			if(window.answersFromDb[i].user_answer==1){
				
				$('<li class="list-group-item linkToTest" id="'+window.answersFromDb[i].idUsers+'">'
				+window.questionfromdb[j].QuestionText+
			'</br> user answer: Yes <p class="text-success">Correct</p> </li>').appendTo(divElementDoneTest);
			}else{
			 
				$('<li class="list-group-item linkToTest" id="'+window.answersFromDb[i].idUsers+'">'
				+window.questionfromdb[j].QuestionText+
			'</br> User answer: No <p class="text-danger">Wrong</p></li>').appendTo(divElementDoneTest);
			}
			j = j+1;
		}else{
			j=0;
		}
		}
		
	}
	
	for(let i = 0; i <  window.highestScoreFromDb.length; i++){
		
			if(window.highestScoreFromDb[i].Users_idUsers  == contentPanelId){
				
				$('<a href="#" class="list-group-item linkToTest disabled"> score: '
				+window.highestScoreFromDb[i].score+
				'</a>').appendTo(divElementDoneTest);
				
			
			}
	}

		
   });
});

