import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  year: DS.attr()

});
