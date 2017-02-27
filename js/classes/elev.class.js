class elev extends Base {

  constructor(propertyValues){
		super(propertyValues);
		this.readAllFromDb();
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
		Id: data.Id,
        answer: data.answer,
        email: data.email,
		questionNumber: data.questionNumber
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
	  write: `INSERT INTO answers (Id,studentAnswer,studentEmail,questionNumber) VALUES 
			(Id,answer,'+email+',questionNumber)`
    }
    }

  }


