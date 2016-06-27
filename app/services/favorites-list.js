import Ember from 'ember';

export default Ember.Service.extend({
  choices: [],

  add(choice) {
    this.get('choices').pushObject(choice);

  },

  remove(choice) {
    this.get('choices').removeObject(choice);
  },
});
