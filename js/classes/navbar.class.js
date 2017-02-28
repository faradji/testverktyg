class Navbar extends Base {

  constructor(propertyValues){
    super(propertyValues);
  }

  setActiveLink(){
    // move active link to the one active
    this.$.find('.active').removeClass();
    this.$.find(
      'li a[href="' + location.pathname + '"]'
    ).parent().addClass('active');
  }

}