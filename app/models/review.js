import DS from 'ember-data';


export default DS.Model.extend({
  rating: DS.attr(),
  username: DS.attr(),
  comments: DS.attr(),
  book: DS.belongsTo('book', { async: true })
});
