class QuestionList extends List {

  constructor(callback){
    super(Question);
    this.readAllFromDb(callback);
  }

  readAllFromDb(callback){
    this.db.readAll( (data)=>{
      this.push.apply(this,data);
      callback && (typeof callback == 'function') && callback(this);
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM questions
      `
    }
  }

}