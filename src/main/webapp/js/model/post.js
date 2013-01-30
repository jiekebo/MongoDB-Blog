define(['underscore', 'backbone'], function(_, Backbone) {
  var PostModel = Backbone.Model.extend({

    defaults: {
      title: "empty name"
    }

  });
  return PostModel;
});
