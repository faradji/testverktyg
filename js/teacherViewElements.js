var divElement = $(document).find(".teacherElements"); 
$(document).ready(function () {

	//finds done tests and displays them under the name
	for(var i = 0; i < window.userFromDb.length; i++)
	{	
		for(var j = 0; j < window.answersFromDb.length; j++)
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
					//	Users_idUsers":2,"Questions_idQuestions":1,"user_answer":1,
						//"user_choice_no":"No","user_choice_yes":"Yes","score":"0/10"} 


});

