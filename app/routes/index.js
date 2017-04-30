import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Veruca Salt",
  subject: "JavaScript question",
  body: "How do you properly implement promises when dealing with async functinos?",
}, {
  id: 2,
  author: "Bob Jones",
  subject: "CSS problem",
  body: "How do I make nested list?",
}];

export default Ember.Route.extend( {
  model() {
      return this.store.findAll('question');
    },

  session: Ember.inject.service('session'),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },

  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
