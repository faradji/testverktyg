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
