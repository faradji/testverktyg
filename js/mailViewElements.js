 $(document).ready(function () {
 	//gömmer email-listan i början
	$('.mailLista').hide();
	var listOfStudents = $(document).find(".mailLista");
	// $(".dropDown").submit(function(e){
    	// return false;
	// });
	for (let i = 0; i < window.klasser.length; i++) {
      $('<option value="'+  window.klasser[i].class +'"class="listOfClasses">'+ window.klasser[i].class+
	  '</option>').appendTo(".dropDown");
    }
	$(".dropDown option").click(function() {
		var contentPanelId = $(this).text();
		
				$(document).find(".mailLista").empty();
		
		
	for(let i = 0; i < window.userFromDb.length; i++)
		{	
			
		if(window.userFromDb[i].class == contentPanelId ){
		
	  $('<a href="#" class="list-group-item">'+ window.userFromDb[i].emailAddress+
	  '</a>').appendTo(listOfStudents);
		
		
		
		}
			
	  }
		
		$('.mailLista').show();
	});

	//vid click av klass dyker listan upp och vid click igen gömmer den sig
		
	$('.btn-klass').click(function(event){
		$(document).find(".mailLista").empty();
		
		
	for(let i = 0; i < window.userFromDb.length; i++)
		{	
			
		if(window.userFromDb[i].class == contentPanelId ){
		
	  $('<a href="#" class="list-group-item">'+ window.userFromDb[i].emailAddress+
	  '</a>').appendTo(listOfStudents);
		
		
		
		}
			
	  }
		
		$('.mailLista').show();
	});
		//Check all checkboxes - Markera alla emailadresser
	// $("#checkAll").change(function () {
		// $("input:checkbox").prop('checked', $(this).prop("checked"));
	// }); 


function länkTillElevView() {
    var länk = prompt("Skriv in länk", "localhost:3000/elev");
    // if (länk != null) {
        // document.getElementById("errorMessage").innerHTML =
        // "Länk: " + länk + " Skickad!";
    // }
	// else{
		// document.getElementById("errorMessage").innerHTML =
        // "Länk: Ej funnen!";
	// }
};


// $('.dropbtn').click(function(event){
 
	// });

});