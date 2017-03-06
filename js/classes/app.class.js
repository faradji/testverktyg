class App {

  constructor(){
	new UserList();
	new KlassList();
	this.startPage = new StartPage();
	this.navbar = new Navbar();
    this.elevView = new elevView();
	this.question = new question();
	this.teacherview = new teacherView();
	this.MailView = new MailView();


    // Show the navbar
    this.navbar.display('body');
	
    // Add a page-content area in the DOM
    $('body').append('<div class="page-content"/>');
	// Some routes
    var router = new Router({
	// root/ startsida prop : proVal
    '/': ()=>{ this.showPage(this.startPage); },
	'/elev': ()=> { this.showPage(this.elevView);
					$.getScript('js/test.js', function() {
						var currentQuestion = parseInt(localStorage.getItem("currentQuestion"));
						var correctAnswers= parseInt(localStorage.getItem("correctAnswers"));
						var currentUser = String(localStorage.getItem("currentUser"));
					});},
	'/teacherView': () => {this.showPage(this.teacherview);$.getScript('js/teacherViewElements.js');},
	'/mailView': () => {this.showPage(this.MailView);$.getScript('js/mailViewElements.js');}
	
    });
  }


  showPage(page){	
    $('.page-content').empty();
    page.display('.page-content');  
    this.navbar.setActiveLink();
	
  }

}
