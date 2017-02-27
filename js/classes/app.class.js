class App {

  constructor(){
	this.startPage = new StartPage();
	
    // Add a page-content area in the DOM
    $('body').append('<div class="page-content"/>');	

	// Some routes
    var router = new Router({
	// root/ startsida prop : proVal
    '/': ()=>{ this.showPage(this.startPage); },
	'/surveys': ()=>{ this.showPage(this.surveys); },
	
    });
  }

 
  showPage(page){
    $('.page-content').empty();
    page.display('.page-content');    
  }

}
