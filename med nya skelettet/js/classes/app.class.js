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
	this.teacherView = new teacherView();
	this.mailView = new mailView();

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

	$.getScript('js/insertDoneTestsListInTeachView.js', function()
		{
				
		});
		
	$.getScript('js/insertStudentAndMailList.js', function()
		{
				
		});

		
    // Some routes
    var router = new Router({
      '/': ()=>{ this.showPage(this.startPage); },
      '/petowners': ()=> { this.showPage(this.petOwnerView); },
      '/about-us': ()=> { this.showPage(this.aboutPage); },
	  '/mailView': ()=> { this.showPage(this.mailView); },
	  '/teacherView': ()=> { this.showPage(this.teacherView); }
    });

  }

  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');
    this.navbar.setActiveLink();
  }

}
