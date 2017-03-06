 $(document).ready(function () {
 	//gömmer email-listan i början
	$('.mailLista').hide();
	var listOfStudents = $(document).find(".mailLista");

	for (let i = 0; i < window.klasser.length; i++) {
      $('<option value="'+  window.klasser[i].class +'"class="listOfClasses">'
	  + window.klasser[i].class+
	  '</option>').appendTo(".dropDown");
    }
	
	
	//vid click av klass dyker listan upp och vid click igen gömmer den sig
	$(document).find(".listOfClasses").on("click", function () {
		// funkar inte på chrome
		var contentPanelId = $(this).text();
		$(document).find(".mailLista").empty();
		console.log(contentPanelId);
		
	for(let i = 0; i < window.userFromDb.length; i++)
		{	
			
		if(window.userFromDb[i].class == contentPanelId ){
			
	  $('<article href="" class="list-group-item" >'+ window.userFromDb[i].emailAddress+
	  '</article>').appendTo(listOfStudents);
		
	  $('<article href="#" class="list-group-item">'+ window.userFromDb[i].emailAddress+
	  '</article>').appendTo(listOfStudents);
		}
	  }
		
		$('.mailLista').show();
	});

function länkTillElevView() {
    var länk = prompt("Kopiera länken", "localhost:3000/elev");
    // if (länk != null) {
        // document.getElementById("errorMessage").innerHTML =
        // "Länk: " + länk + " Skickad!";
    // }
	// else{
		// document.getElementById("errorMessage").innerHTML =
        // "Länk: Ej funnen!";
	// }
};