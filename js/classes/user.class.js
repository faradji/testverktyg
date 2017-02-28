class user extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.getUser();
		
	}
	
	getUser(){
		var userFromDb = [];
    this.db.readAll((data)=>{
		window.userFromDb = data;
    });
	}
	
//	getUserByEmail(){
  //  this.db.getCurrentUser((data)=>{
		//emailAddress:emailAddress
//		console.log(data);
  //  },);

//	}

  static get sqlQueries(){
    
    return {
		      readAll: `
        SELECT * FROM users
      `,
	  getCurrentUser: `
        SELECT idUsers FROM users where emailAddress = ?
      `
    }
    }

  }