class MailView extends Base {

	constructor(props, callback){
		super(props);
	
		new KlassList((klassList)=>{
			this.klassList=klassList;
			new UserList((userList)=>{
				this.userList=userList;
				callback && callback(this);
			})
		});
		this.toggleDescription();
	}
	 toggleDescription(){
    this.descriptionVisible = this.descriptionVisible? false : true;
    this.toggleText = this.descriptionVisible? 'Visa' : 'Göm';
  }
}