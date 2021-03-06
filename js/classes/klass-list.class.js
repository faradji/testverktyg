class KlassList extends List {

  constructor(callback){
    super(klass);
    this.readAllFromDb(callback);
  }

  readAllFromDb(callback){
    this.db.readAllKlasser((data)=>{
      this.push.apply(this,data);
	  window.klasser = data;
      callback && (typeof callback == 'function') && callback(this);
    });
  }

  static get sqlQueries(){
    return {
      readAllKlasser: `
        SELECT class FROM users GROUP BY class;
      `
    }
  }

}
