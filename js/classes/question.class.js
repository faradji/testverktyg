class question extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.readAllFromDb();
		$.getScript('js/test.js');
	}
	
readAllFromDb(callback){
    this.db.readAll((data)=>{
		window.questionfromdb=data;
    });
	//this.db.readIdAnswers((data)=>{
	//	window.highestId=data;
    //});
 }
	
insertInDb(callback){
    this.db.write({
		Users_idUsers: Id,
        Questions_idQuestions: Questions_idQuestions ,
        user_answer: studentAnswer
    },callback);
  }

  static get sqlQueries(){
    
    return {
		      readAll: `
        SELECT * FROM questions
      `,
	  readIdAnswers: `
        SELECT MAX(id) AS id FROM answers
      `,
	  write: `INSERT users_responses_to_questions SET ?`
	  //INSERT INTO answers (Id, studentAnswer,studentEmail,questionNumber)VALUES
		//	(Id,answer,email,questionNumber)`
    }
    }

  }