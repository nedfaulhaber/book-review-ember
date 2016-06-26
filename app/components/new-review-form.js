import Ember from 'ember';

export default Ember.Component.extend({

  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveNewReview1() {
      var params = {
        rating: parseInt(this.get('rating')),
        comments: this.get('comments'),
        username: this.get('username'),
        book: this.get('book'),
      };
      this.set('addNewReview', false);
      this.sendAction('saveNewReview2', params);
    }
  }
});
