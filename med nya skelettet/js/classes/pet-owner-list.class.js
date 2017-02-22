class PetOwnerList extends List {

  constructor(items){
    super(PetOwner,items);
    this.db.createTableIfNeeded();
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let petowner of this){
      petowner.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  readAllFromDBWithPets(callback){
    this.db.readAllWithPets((data)=>{
      //console.log(data);

      // collect all pet owners in a new array
      var petownersById = {};
      for(let item of data){

        // create petowner and store by id
        petownersById[item.id] = petownersById[item.id] || {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          birthDate: item.birthDate,
          pets: []
        }
        // add the current pet
        if(item.petId){
          petownersById[item.id].pets.push({
            id: item.petId,
            name: item.petName,
            birthDate: item.petBirthdate
          });
        }

      }

      // Loop through petownersById
      // and push the petowner to this list
      for(let id in petownersById){
        this.push(petownersById[id]);
      }

      callback();
    });
  }

  static get sqlQueries(){
    return {
      createTableIfNeeded: `
        CREATE TABLE IF NOT EXISTS petowners (
          id int(11) unsigned NOT NULL AUTO_INCREMENT,
          firstName varchar(255) DEFAULT 'John',
          lastName varchar(255) DEFAULT 'Doe',
          birthDate date DEFAULT '2000-01-01',
          PRIMARY KEY (id)
        )
      `,
      readAll: `
        SELECT * FROM petowners
      `,
      readAllWithPets: `
        SELECT * FROM petownersWithPets
      `
    }
  }

}
