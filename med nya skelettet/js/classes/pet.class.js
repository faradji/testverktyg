class Pet extends Organism {

  static defaultPropertyValues(){
    return {
      name: 'Fluffy',
      birthDate: dateTimeForMySQL('2010-01-01'),
      owner_id: 0
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);

    // Convert the birthDate property
    // from String to Date if needed
    if(typeof this.birthDate == 'string'){
      this.birthDate = dateTimeForMySQL(this.birthDate);
    }
  }

  talk(){
    new Modal({
      title: this.name,
      content: `Hej, jag heter ${this.name}!`
    });
    //this.$$.toggleClass('big-border');
  }

  tellAge(e){
    new Modal({
      title: this.name,
      content: `Jag är ${this.age} gammal...`
    });
    e.stopPropagation();
  }

  insertInDb(callback){
    this.db.newPet({
      name: this.name,
      birthDate: this.birthDate,
      owner_id: this.owner_id
    },callback);
  }

  static get sqlQueries(){
    return {
      newPet: `
        INSERT pets SET ?
      ` 
    }
  }

}
