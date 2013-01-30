define(['backbone', 'model/post'], function (Backbone, Post) {

    var Posts = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Post,
        url:'api/post'

    });
    return Posts;
});
