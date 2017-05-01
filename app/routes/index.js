import Ember from 'ember';

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
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
