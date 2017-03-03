class UserList extends List {

  constructor(callback){
    super(user);
    this.readAllFromDb(callback);
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
	  window.userFromDb = data;
      this.push.apply(this,data);
      callback && (typeof callback == 'function') && callback(this);
    });this.db.readAllFromDoneTests((data)=>{
  window.userDoneTest = data;
  console.log(data);
    });
  }
  

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM users
      `,
	  readAllFromDoneTests: `
        SELECT * FROM alredydonetest
      `
	  
	  
    }
  }

}
