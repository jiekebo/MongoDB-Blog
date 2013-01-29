define(['underscore', 'backbone'], function(_, Backbone) {
  var TaskModel = Backbone.Model.extend({

    defaults: {
      title: "empty name"
    }

  });
  return TaskModel;
});
