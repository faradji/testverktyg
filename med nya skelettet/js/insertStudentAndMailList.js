$(document).ready(function () {
  $('.generateMailButton').append(`
  <button type="button" class="generateURL btn btn-default">Generera URL</button>
`);

  $('.copyMailListButton').append(`
  <label class="MarkAllButton"><input type="checkbox" id="checkAll"/>Check all</label>
`);

$('.studClassesMailChoice').append(`
  <button type="button" class="list-group-item" id="klass">KlassLista</button>
  <button type="button" class="list-group-item" id="klass1">JAVA</button>
  <button type="button" class="list-group-item" id="klass2">JavaScript</button>
  <button type="button" class="list-group-item" id="klass3">JavaScript2</button>
  <button type="button" class="list-group-item" id="klass4">HTML/CSS SnabbKurs</button>
  <button type="button" class="list-group-item" id="klass5">JAVA2</button>
  <button type="button" class="list-group-item" id="klass6">JAVA3</button>

`);


$('.tempMailAdressesList').append(`
  
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">...@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">...@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  <li class="list-group-item"><label class="alternativ"><input type="checkbox" id="email"><span id="email-font">..@email.com</span></label></li>
  
`);

});
	//PopUp fönster med LÄNK+ felmeddelande
	function länkTillElevView() {
    var länk = prompt("Skriv in länk", "localhost:3000/about-us");
    if (länk != null) {
        document.getElementById("errorMessage").innerHTML =
        "Länk: " + länk + " Skickad!";
    }
	else{
		document.getElementById("errorMessage").innerHTML =
        "Länk: " + länk + " Ej funnen!";
	}};
	
	//gömmer email-listan i början
	$(document).ready(function(){
		$('#lista').hide();
	});
	
	//vid click av klass dyker listan upp och vid click igen gömmer den sig
	$(document).ready(function(){
	$('#klass1').click(function(){
		$('#lista').toggle();
	});
	$('#klass2').click(function(){
		$('#lista').toggle();
	});
	$('#klass3').click(function(){
		$('#lista').toggle();
	});
	$('#klass4').click(function(){
		$('#lista').toggle();
	});
	$('#klass5').click(function(){
		$('#lista').toggle();
	});
	$('#klass6').click(function(){
		$('#lista').toggle();
	});
	});
	
	$(document).ready(function(){
	//Check all checkboxes - Markera alla emailadresser
	$("#checkAll").change(function () {
		$("input:checkbox").prop('checked', $(this).prop("checked"));
	});
	});










                 