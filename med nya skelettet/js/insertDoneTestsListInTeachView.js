$(document).ready(function () {
	$('.teachReadtest').hide();
	$('.displayDoneTest').hide();
	
	//vid click av elev dyker listan upp och vid click igen gömmer den sig
  $('.btn-prov').on('click',function(){
    $('.displayDoneTest').toggle();
  });
 
});