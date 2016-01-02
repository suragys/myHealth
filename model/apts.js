Apts = new Mongo.Collection("apts");

Apts.allow({
  insert: function (userId, apt) {
    return userId && apt.owner === userId;
  },

  update: function (userId, apt, fields, modifier) {
    return userId && apt.owner === userId;
  },

  remove: function (userId, apt) {
    return userId && apt.owner === userId;
  }
});