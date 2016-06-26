import Ember from 'ember';

export function ratingSymbol(params) {
  var ratingGiven = params[0].get('rating');

  if (ratingGiven === 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"</span><span class="glyphicon glyphicon-bookmark"</span><span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span>');

  } else if (ratingGiven === 4) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span>');
  } else if (ratingGiven === 3) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span>');

  } else if (ratingGiven === 2) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-bookmark"></span><span class="glyphicon glyphicon-bookmark"></span>');

  } else if (ratingGiven === 1) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-bookmark"></span>');

  }

}

export default Ember.Helper.helper(ratingSymbol);
