class teacherView extends Base {

  constructor(propertyValues){
    super(propertyValues);
	this.readAllFromDb();
  }

  
readAllFromDb(callback){
    this.db.readAllAnswers((data)=>{
		window.answersFromDb=data;
    });

 }
  
  static get sqlQueries(){
    
    return {
		      readAllAnswers: `
        SELECT * FROM users_responses_to_questions
      `
    }
}
}