import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    addToList(choice) {
      this.get('favoritesList').add(choice);
    removeFromList(choice) {
      this.get('favoritesList').remove(choice);
    }
  }
});
