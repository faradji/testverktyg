$(document).ready(function(){
	
	$('.questions').append('<p>fr&aring;gan h&auml;r</p><br/>');
	$('.option').append('<input type="checkbox" name="svar-ett" /><br/><br/>');
	$('.option').append('<input type="checkbox" name="svar-tva" /><br/>');
	$('.questions').append('<input type="button" value="n&auml;sta fr&aring;ga"/>');
	
	
	//förberreda inför db connection
	
	// Using the core $.ajax() method
$.ajax({
 
    // The URL for the request
    url: "js/tempJSON.json",
 
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
     $( "<h1>" ).text( json.title ).appendTo( "body" );
     $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });
	
});