class teacherView extends Base {

  constructor(){
    super();

    new Survey(props, (survey)=>{
      this.survey = survey;
      new QuestionList((questions)=>{
        this.questions = questions;
        callback(this);
      });
    });
  }

/*   saveResponse(event){
    event.preventDefault();
    console.log('response saved');
    console.log('this.questions', this.questions);
    for(let q of this.questions){
      let r = new Response({
        question: q.id,
        value: q.value,
        survey: q.survey,
        user: 3 // fake user
      });
      r.insert();
    }
  } */

}