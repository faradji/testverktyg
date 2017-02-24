$(document).ready(function () {
  $('.doneTestsList').append(`
  <button type="button" class="list-group-item" id="elev">ELEVLISTA</button>
  <button type="button" class="list-group-item" id="elev1">Ali</button>
  <button type="button" class="list-group-item" id="elev2">Louise</button>
  <button type="button" class="list-group-item" id="elev3">Dijana</button>
  <button type="button" class="list-group-item" id="elev4">Masoud</button>
  <button type="button" class="list-group-item" id="elev5">Henrik</button>
  <button type="button" class="list-group-item" id="elev6">Magnus</button>
`);

$('.teachReadtest').append(`
  <button type="button" class="list-group-item" id="doneTest">Färdiga prov</button>
  <button type="button" class="list-group-item" id="doneTest1">ProvNamn: JAVA1</button>
  <button type="button" class="list-group-item" id="doneTest2">ProvNamn: Java2</button>
  <button type="button" class="list-group-item" id="doneTest3">ProvNamn: JavaScript</button>
`);

$('.displayDoneTest').append(`
 <h2>Färdigt prov</h2>
 <h4>Namn: </h4>
 <h4>Prov:</h4>
 <h4>Datum:</h4>
`);
});

	//gömmer färdiga-prov-listan i början
	$(document).ready(function(){
		$('.teachReadtest').hide();
	});
	
	//vid click av elev dyker listan upp och vid click igen gömmer den sig
	$(document).ready(function(){
	$('#elev1').click(function(){
		$('.teachReadtest').toggle();
	});
	$('#elev2').click(function(){
		$('.teachReadtest').toggle();
	});
	$('#elev3').click(function(){
		$('.teachReadtest').toggle();
	});
	$('#elev4').click(function(){
		$('.teachReadtest').toggle();
	});
	$('#elev5').click(function(){
		$('.teachReadtest').toggle();
	});
	$('#elev6').click(function(){
		$('.teachReadtest').toggle();
	});
	});
	
	//gömmer färdigt prov
	$(document).ready(function(){
		$('.displayDoneTest').hide();
	});
	
	//Vid click av färdigt prov
	$(document).ready(function(){
	$('#doneTest1').click(function(){
		$('.displayDoneTest').toggle();
	});
	$('#doneTest2').click(function(){
		$('.displayDoneTest').toggle();
	});
	$('#doneTest3').click(function(){
		$('.displayDoneTest').toggle();
	});
	});
                 