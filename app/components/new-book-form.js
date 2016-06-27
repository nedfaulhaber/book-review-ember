import Ember from 'ember';

export default Ember.Component.extend({


  fullName: Ember.computed('book.firstname', 'book.lastname', function() {
    return this.get('book.firstname') + " " + this.get('book.lastname');
  }),

  addNewBook: false,
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    saveNewBook1() {
      var params = {
        title: this.get('title'),
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        year: this.get('year'),
      };
      this.set('addNewBook', false);
      this.sendAction('saveNewBook2', params);
    }
  }
});
