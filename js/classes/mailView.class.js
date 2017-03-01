class MailView extends Base {

	constructor(props, callback){
		super(props);
	
	/* 	new KlassList((klassList)=>{
			this.klassList=klassList;
			console.log('skapar KlassList från db'); */
			new UserList((userList)=>{
				this.userList=userList;
				callback && callback(this);
				console.log('skapar mailList från db');
			});
		//});
	}

}