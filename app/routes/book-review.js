import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.book_id);
    // return this.store.findRecord('review', params.review_id);
  },
  actions: {
    saveNewReview3(params) {
      var newReview = this.store.createRecord('review', params);
console.log(params);
      var book = params.book;
      book.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return book.save();
      });
      this.transitionTo('book', params.id);
    },
  }
});
