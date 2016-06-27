import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  fullName: Ember.computed('book.firstname', 'book.lastname', function() {
    return this.get('book.firstname') + " " + this.get('book.lastname');
  }),
});
