class PetOwnerView extends Base {

  defaultPropertyValues(){
    return {
      petOwners: new PetOwnerList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}