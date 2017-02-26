	//PopUp fönster med LÄNK+ felmeddelande
	function länkTillElevView() {
    var länk = prompt("Skriv in länk", "localhost:3000/about-us");
    if (länk != null) {
        document.getElementById("errorMessage").innerHTML =
        "Länk: " + länk + " Skickad!";
    }
	else{
		document.getElementById("errorMessage").innerHTML =
        "Länk: Ej funnen!";
	}};

$(document).ready(function () {
	//gömmer email-listan i början
	$('.tempMailAdressesList').hide();
	
	//vid click av klass dyker listan upp och vid click igen gömmer den sig
	$('.btn-klass').click(function(){
		$('.tempMailAdressesList').toggle();
	});

	//Check all checkboxes - Markera alla emailadresser
	$("#checkAll").change(function () {
		$("input:checkbox").prop('checked', $(this).prop("checked"));
	});

});








                 