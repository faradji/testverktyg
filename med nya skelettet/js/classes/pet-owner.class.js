class PetOwner extends Organism {

  static defaultPropertyValues(){
    return {
      id: 0,
      firstName: 'John',
      lastName: 'Doe',
      birthDate: dateTimeForMySQL('2000-01-01'),
      pets: new PetList()
    }
  }

  constructor(propertyValues){
    super(propertyValues);

    // If needed convert the birthDate property
    // from String to Date
    if(typeof this.birthDate == 'string'){
      this.birthDate = dateTimeForMySQL(this.birthDate);
    }

    // If needed convert the pets property 
    // from Array to PetList
    if(!(this.pets instanceof PetList)){
      this.pets = new PetList(this.pets);
    }

  }

  get name(){
    return this.firstName + ' ' + this.lastName;
  }

  set name(fullName){
    fullName = fullName.split(' ');
    this.firstName = fullName[0] || 'John';
    this.lastName = fullName[1] || 'Doe';
  }

  talk(){
    new Modal({
      title: this.firstName + ' säger:',
      content: `Hej, jag är en djurägare som heter ${this.name}!`
    });
  }

  insertInDb(callback){
    this.db.newPetOwner({
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate
    },callback);
  }

  static get sqlQueries(){
    return {
      newPetOwner: `
        INSERT petowners SET ?
      ` 
    }
  }

}
