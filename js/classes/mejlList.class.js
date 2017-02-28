class MejlList extends List {

  constructor(){
    super();
    this.readMejlFromDb();
  }

  readMejlFromDb(callback){
    this.db.readMejl((data)=>{
      this.push.apply(this,data);
      callback && callback();
    });
  }

  static get sqlQueries(){
    return {
      readMejl: `
        SELECT emailAddress FROM users
      `
    }
  }

}
