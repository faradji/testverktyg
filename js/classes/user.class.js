class user extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.getUser();
		
	}
	
	getUser(){
		var userFromDb = [];
    this.db.readAll((data)=>{
		userFromDb = data;
    });
	}

  static get sqlQueries(){
    
    return {
		      readAll: `
        SELECT * FROM users
      `
    }
    }

  }