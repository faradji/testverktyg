$(document).ready(function () {
	$('.teachReadtest').hide();
	$('.displayDoneTest').hide();
	
	//vid click av elev dyker listan upp och vid click igen gömmer den sig
  $('.btn-elev').on('click',function(){
    $('.teachReadtest').toggle();
  });

	
	//Vid click av färdigt prov
	$('.btn-prov').click(function(){
		$('.displayDoneTest').toggle();
	});

  
});