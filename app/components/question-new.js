import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
     var params = {
       author: this.get('author'),
       subject: this.get('subject'),
       body: this.get('body')
     };
     this.set('addNewQuestion', false);
     this.sendAction('saveQuestion', params);
   }
  }
});
