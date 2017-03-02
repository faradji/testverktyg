class question extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.readAllFromDb();
	}
	
readAllFromDb(callback){
    this.db.readAllQuestions((data)=>{
		window.questionfromdb=data;
    });
 }
	
insertInDb(callback){
    this.db.write({
		Users_idUsers: Id,
        Questions_idQuestions: Questions_idQuestions ,
        user_answer: studentAnswer,
		score:score
    },callback);
  }

  static get sqlQueries(){
    
    return {
		      readAllQuestions: `
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