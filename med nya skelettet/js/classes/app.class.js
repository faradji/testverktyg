class App {

  constructor(){

    // Create some test data then start the app
    new TestDataGenerator((petOwnerView)=>{
      this.start(petOwnerView);
    });

  }

  start(petOwnerView){

    // Instantiate som objects
    //this.bootstrapSizeTool = new BootstrapSize();
    this.navbar = new Navbar();
    this.startPage = new StartPage();
    this.petOwnerView = petOwnerView;
    this.aboutPage = new AboutUs();

    // Show the navbar and the bootstrapSizeTool
    this.navbar.display('body');
   // this.bootstrapSizeTool.display('body');

    // Add a page-content area in the DOM
    $('body').append('<div class="page-content"/>');
	// load provform.js and make sure it's run
	// after everything else is loaded
	$.getScript('js/provform.js', function()
{
		displayCurrentQuestion();
});

    // Some routes
    var router = new Router({
      '/': ()=>{ this.showPage(this.startPage); },
      '/petowners': ()=> { this.showPage(this.petOwnerView); },
      '/about-us': ()=> { this.showPage(this.aboutPage); }
    });

  }

  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');
    this.navbar.setActiveLink();
  }

}
