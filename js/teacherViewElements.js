$(document).ready(function () {
	var divElement = $(document).find(".teacherElements"); 
var divElementDoneTest = $(document).find(".doneTest");

 
	//finds done tests and displays them under the name
	for(let i = 0; i < window.userFromDb.length; i++)
	{	
		for(let j = 0; j < window.answersFromDb.length; j++)
		{
			if(window.answersFromDb[j].Users_idUsers == window.userFromDb[i].idUsers ){
				
		  $('<li>' + window.userFromDb[i].firstName + ' ' +
		  window.userFromDb[i].lastName + ': '+ window.userFromDb[i].class+
		  '</li></br>').appendTo(divElement);
			$('<li class="linkToTest"><a href="">'+ 'prov med id: '+window.userFromDb[i].idUsers+
			'</a></li></br>').appendTo(divElement);
			break;
			}	
		}
  }
  
  var lastElement = window.answersFromDb[window.answersFromDb.length - 1];
  	//display chosen test

	
   $(this).find(".linkToTest").on("click", function (event) {
		event.preventDefault();
		
		//$(document).find(".doneTest").empty();
		 $(".doneTest").html("");

	for(let i = 0; i < window.questionfromdb.length; i++)
	{	
		
		if(window.answersFromDb[i].user_answer==1){
			
			$('<article>'+window.questionfromdb[i].QuestionText+
		'</br> user answer: Yes </article></br>').appendTo(divElementDoneTest);
		}else{
		
			$('<article>'+window.questionfromdb[i].QuestionText+
			'</br> user answer: No </article></br>').appendTo(divElementDoneTest);
		}
	}

	$('<article> score: '+lastElement.score+'</article></br>').appendTo(divElementDoneTest);
   });

   	
});

