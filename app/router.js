import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('about');
  this.route('login');
  this.route('signup');
  this.route('protected');
  this.route('profile', { path: '/:user_id' });
  this.route('questions', function() {
    this.route('new');
    this.route('question', { path: '/:id'});
  });
});

export default Router;
