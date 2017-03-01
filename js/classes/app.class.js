class App {

  constructor(){
	new UserList();
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
	'/elev': ()=> { this.showPage(this.elevView);},
	'/teacherView': () => {this.showPage(this.teacherview)},
	'/mailView': () => {console.log('Show MailView');this.showPage(this.MailView)}
	
    });
  }


  showPage(page){	
    $('.page-content').empty();
    page.display('.page-content');  
    this.navbar.setActiveLink();
	
  }

}
