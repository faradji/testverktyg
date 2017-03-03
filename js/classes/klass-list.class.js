class KlassList extends List {

  constructor(callback){
    super(klass);
    this.readAllFromDb(callback);
  }

  readAllFromDb(callback){
    this.db.readAllKlasser((data)=>{
      this.push.apply(this,data);
      callback && (typeof callback == 'function') && callback(this);
	  console.log('hämtar KlassList från db');
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
