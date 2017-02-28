class KlassList extends List {

  constructor(){
    super();
	this.readKlassFromDb();
  }

 readKlassFromDb(callback){
    this.db.readKlass((data)=>{
      this.push.apply(this,data);
      callback && callback();
    });
  }

  static get sqlQueries(){
    return {
	  readKlass: `
        SELECT class FROM users
      `
    }
  }

}
