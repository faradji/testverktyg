class Organism extends Base {

  get age(){

    // We need a birthDate to calc with
    // if we do not have that then return 0;
    if(!(this.birthDate instanceof Date)){
      return 0;
    }

    // Birthdate - split into year, month and date in month
    var birthYear = this.birthDate.getFullYear();
    var birthMonth = this.birthDate.getMonth() + 1;
    var birthDateInMonth = this.birthDate.getDate();

    // Now (today) - split into year, month and date in month
    var now = new Date();
    var nowYear = now.getFullYear();
    var nowMonth = now.getMonth() + 1;
    var nowDateInMonth = now.getDate();

    // Approximate age
    var age = nowYear - birthYear;

    // We have not reached the month of the birthday yet this year
    if(birthMonth > nowMonth){ age--; }

    // We have not reached the date in the month of the birthday yet this year
    if(birthMonth == nowMonth && birthDateInMonth > nowDateInMonth){ age--; }

    return age;

  }

}
