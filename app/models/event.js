var db = require('../config');
var Invite = require('./invite');
var User = require('./user');

var Event = db.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  defaults: {
  },
  initialize: function(){
  },
  invites: function() {
     return this.hasMany('Invite', 'event_id');
  }
});

module.exports = db.model('Event', Event);
