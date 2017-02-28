class App {

  constructor(){
	this.startPage = new StartPage();
	this.navbar = new Navbar();
  this.elev = new elev();
  this.elevView = new elevView();


    // Show the navbar
    this.navbar.display('body');
	
    // Add a page-content area in the DOM
    $('body').append('<div class="page-content"/>');	

	// load provform.js and make sure it's run
	// after everything else is loaded
	$.getScript('js/provform.js', function()
		{
			//	displayCurrentQuestion();
		});
	// Some routes
    var router = new Router({
	// root/ startsida prop : proVal
    '/': ()=>{ this.showPage(this.startPage); },
	'/elev': ()=> { this.showPage(this.elev); },
  '/teacherview': () => {this.showPage(this.teacherview)}
	
    });
  }

 
  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');  
    this.navbar.setActiveLink();	
  }

}
