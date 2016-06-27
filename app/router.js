import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-book');
  this.route('book-review', {path: '/book/:book_id'});
  this.route('favorites');
});

export default Router;
