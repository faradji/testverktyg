class teacherView extends Base {

  constructor(propertyValues){
    super(propertyValues);
	this.readAllFromDb();
  }
<<<<<<< Temporary merge branch 1
=======
  
>>>>>>> Temporary merge branch 2

 }
  
  static get sqlQueries(){
    
    return {
		      readAllAnswers: `
        SELECT * FROM users_responses_to_questions
      `
    }
}
}