import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    addToList(item) {
      this.get('favoritesList').add(item);
    }
  }
});
