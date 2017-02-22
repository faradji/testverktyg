class PetList extends List {

  constructor(items){
    super(Pet,items);
    this.db.createPetsTableIfNeeded();
    this.db.createPetOwnerWithPetsView();
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let pet of this){
      pet.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
		window.questionfromdb=data;
        this.push.apply(this,data);
        callback();
    });
  }
  
    savetTestToDb(callback){
        this.db.saveTest({
      idAnswers: window.saveId,
      studentAnswer: window.saveChoiceString,
      studentEmail: 'ali@gmail.com'
    },callback);
  }

  static get sqlQueries(){
    
    return {
      createPetsTableIfNeeded: `
        CREATE TABLE IF NOT EXISTS pets (
          id int(11) unsigned NOT NULL AUTO_INCREMENT,
          name varchar(255) DEFAULT NULL,
          birthDate date DEFAULT NULL,
          owner_id int(11) unsigned DEFAULT NULL,
          PRIMARY KEY (id),
          KEY ownerid (owner_id),
          CONSTRAINT ownerid FOREIGN KEY (owner_id) 
          REFERENCES petowners (id)
        )
      `,
      createPetOwnerWithPetsView: `
        CREATE OR REPLACE VIEW petownersWithPets 
        AS SELECT 
          petowners.id,
          petowners.firstName,
          petowners.lastName,
          petowners.birthDate,
          pets.id AS petId,
          pets.name AS petName,
          pets.birthDate AS petBirthdate 
        FROM petowners 
        LEFT JOIN pets 
        ON petowners.id = pets.owner_id
      `,
      readAll: `
        SELECT * FROM questions
      `,
	  saveTest:  `
        INSERT INTO answers (idAnswers,studentAnswer,studentEmail)
VALUES (?,?,?)
      ` 
    }
    }

  }


