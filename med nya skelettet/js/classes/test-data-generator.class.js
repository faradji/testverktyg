class TestDataGenerator extends Base {

  constructor(callback){
    super();
    this.callback = callback;
    this.dropTables(()=>{
      this.generatePetOwners();
    });
  }

  randomItemFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  randomNum(min,max){
    var diff = max - min;
    return min + Math.round(0.5 + Math.random()*(diff+1)) - 1;
  }

  dropTables(callback){
    this.db.dropPets(()=>{
      this.db.dropPetowners(callback);
    });
  }

  generatePetOwners(howMany = 10){

    // Some data to seed from
    var firstNames = [
      'Anna','Bertil','Cecilia','David','Erika','Fredrik',
      'Gabriella', 'Hugo', 'Ingrid', 'Jacob', 'Karolina', 'Leo'
    ];
    var lastNames = [
      'Svensson', 'Karlsson', 'Olsson', 'Bengtsson', 'Davidsson',
      'Efraimsdotter', 'Knutsson', 'Khwaja', 'Malm', 'Frisk'
    ];

    // Create a new list of petowners
    var list = new PetOwnerList();
    for(var i = 0; i < howMany; i++){
      list.push({
        firstName: this.randomItemFromArray(firstNames),
        lastName: this.randomItemFromArray(lastNames),
        birthDate: dateTimeForMySQL(
          this.randomNum(1920,2010) + '-' +
          this.randomNum(1,12) + '-' + 
          this.randomNum(1,28))
      });
    }

    // Write the list to DB
    list.writeToDb(()=>{

      //console.log("Written to DB!",list);
      // Now read it back into a list to confirm
      var listFromDb = new PetOwnerList();
      listFromDb.readAllFromDb(()=>{
      //  console.log("Read from DB",listFromDb);
        this.generatePets();
      });

    });
  }

  generatePets(howMany = 20, largestPetOwnerId = 10){

    var petNames = [
      "Fluffy",
      "Duffy",
      "Puh",
      "Garfield",
      "Hobs",
      "Pluto",
      "Caro",
      "Missy",
      "Inga-Greta",
      "Brunte"
    ];

    // Create a new list of pets
    var list = new PetList();
    for(var i = 0; i < howMany; i++){
      list.push({
        owner_id: this.randomNum(1,largestPetOwnerId),
        name: this.randomItemFromArray(petNames),
        birthDate: dateTimeForMySQL(
          this.randomNum(1995,2010) + '-' +
          this.randomNum(1,12) + '-' + 
          this.randomNum(1,28))
      });
    }
    

    // Write the list to DB
    list.writeToDb(()=>{

    //  console.log("Written to DB!",list);
      // Now read it back into a list to confirm
      var listFromDb = new PetList();
      listFromDb.readAllFromDb(()=>{
       // console.log("Read from DB",listFromDb);
        
        // Create a PetOwnerList with
        // the correct pets attached to each owner
        var listOwnersWithPets = new PetOwnerList();
        listOwnersWithPets.readAllFromDBWithPets(()=>{
          
       //   console.log(
         //   "Nice list of owners and pets from the DB",
          //  listOwnersWithPets
       //   );

          var thePetOwnerView = new PetOwnerView({
            petOwners: listOwnersWithPets
          });

          // All testdata is generated, so run the 
          // callback and send thePetOwnerView to it
          this.callback(thePetOwnerView);

        });

      });

    });
  }

  static get sqlQueries(){
    return {
      dropPetowners: `
        DROP TABLE IF EXISTS petowners 
      `,
      dropPets: `
        DROP TABLE IF EXISTS pets 
      `
    }
  }


}