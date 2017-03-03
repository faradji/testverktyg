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
	
	//vid click av klass dyker listan upp och vid click igen gömmer den sig
$(".dropDown option").click(function() {
		var contentPanelId = $(this).text();
		$(document).find(".mailLista").empty();
		
	for(let i = 0; i < window.userFromDb.length; i++)
		{	
			
		if(window.userFromDb[i].class == contentPanelId ){
		
	  $('<article href="#" class="list-group-item">'+ window.userFromDb[i].emailAddress+
	  '</article>').appendTo(listOfStudents);
		
		
		
		}
			
	  }
		
		$('.mailLista').show();
	});

		//Check all checkboxes - Markera alla emailadresser
	// $("#checkAll").change(function () {
		// $("input:checkbox").prop('checked', $(this).prop("checked"));
	// }); 


$("#sendLinkButton").click(function() {

    var länk = prompt("Skriv in länk", "localhost:3000/elev");

});
});