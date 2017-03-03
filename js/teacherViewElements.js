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
				
				$('<article href="" class="list-group-item linkToTest" id="'+window.answersFromDb[i].idUsers+'">'
				+window.questionfromdb[j].QuestionText+
			'</br> user answer: Yes </a></br>').appendTo(divElementDoneTest);
			}else{
			
				$('<article href="" class="list-group-item linkToTest" id="'+window.answersFromDb[i].idUsers+'">'
				+window.questionfromdb[j].QuestionText+
			'</br> user answer: No </a></br>').appendTo(divElementDoneTest);
			}
			j = j+1;
		}else{
			j=0;
		}
		}
		
	}

		if(contentPanelId==1){
			$('<article> score: '+window.answersFromDb[10].score+'</article></br>').appendTo(divElementDoneTest);
		
		}else{
			$('<article> score: '+window.answersFromDb[21].score+'</article></br>').appendTo(divElementDoneTest);
		
		}
	
	
   });
});

