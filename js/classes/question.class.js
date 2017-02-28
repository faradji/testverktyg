class question extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.readAllFromDb();
		$.getScript('js/provform.js');
	}
	
readAllFromDb(callback){
    this.db.readAll((data)=>{
		window.questionfromdb=data;
    });
	this.db.readIdAnswers((data)=>{
		window.highestId=data;
    });
 }
	
insertInDb(callback){
    this.db.write({
		Id: Id,
        answer: studentAnswer,
        email: studentEmail,
		questionNumber: questionNumber
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
	  write: `INSERT answers SET ?`
	  //INSERT INTO answers (Id, studentAnswer,studentEmail,questionNumber)VALUES
		//	(Id,answer,email,questionNumber)`
    }
    }

  }