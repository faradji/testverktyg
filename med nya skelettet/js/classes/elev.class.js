class elev extends Base {

  constructor(propertyValues){
    super(propertyValues);
		
	}
	
 insertInDb(callback){
    this.db.write({
		Id: data.Id,
      questionNumber: data.questionNumber,
      answer: data.answer,
      email: data.email

    },callback);
  }


  static get sqlQueries(){
    
    return {
	  write: `INSERT INTO answers (Id,studentAnswer,studentEmail,questionNumber) VALUES 
			(Id,answer,'+email+',questionNumber)`

    }
    }

  }


