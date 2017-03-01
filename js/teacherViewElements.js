var divElement = $(document).find(".teacherElements"); 
var divElementDoneTest = $(document).find(".doneTest");
$(document).ready(function () {

	//finds done tests and displays them under the name
	for(let i = 0; i < window.userFromDb.length; i++)
	{	
		for(let j = 0; j < window.answersFromDb.length; j++)
		{
			if(window.answersFromDb[j].Users_idUsers == window.userFromDb[i].idUsers ){
				
		  $('<li>' + window.userFromDb[i].firstName + ' ' +
		  window.userFromDb[i].lastName + ': '+ window.userFromDb[i].class+
		  '</li></br>').appendTo(divElement);
			$('<li class="linkToTest"><a href="">'+ 'prov: '+window.userFromDb[i].idUsers+
			'</a></li></br>').appendTo(divElement);
			break;
			}	
		}
  }
  
  	//display chosen test
   $(this).find(".linkToTest").on("click", function (event) {
		event.preventDefault();
	for(let i = 0; i < window.answersFromDb.length; i++)
	{	
		if(window.answersFromDb[i].user_answer==1){
		$('<article>'+'question number: '+ window.answersFromDb[i].Questions_idQuestions+
		' user answer: '+ 'Yes'+ 'total score was: '+window.answersFromDb[i].score +
		'</article></br>').appendTo(divElementDoneTest);
		}else{
			$('<article>'+'question number: '+ window.answersFromDb[i].Questions_idQuestions+
		' user answer: '+ 'No'+ 'total score was: '+window.answersFromDb[i].score +
		'</article></br>').appendTo(divElementDoneTest);
		}
	}
	
   });
					

});

