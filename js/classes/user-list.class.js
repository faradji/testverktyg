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
    });this.db.getHighestScoreValue((data)=>{
  window.highestScoreFromDb = data;
    });
  }
  

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM users
      `,
	  readAllFromDoneTests: `
        SELECT * FROM alredydonetest
      `,
	  getHighestScoreValue: `
	  select Users_idUsers, Questions_idQuestions, score
from users_responses_to_questions where Questions_idQuestions = 10
and Users_idUsers IS NOT NULL
	  `
	  
	  
    }
  }

}
