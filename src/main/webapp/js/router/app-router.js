define(['backbone', 'bootstrap', 'view/posts-view'], function (Backbone, Bootstrap, PostsView) {
    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: true, root: "/" });
        },

        routes:{
            '':'home',
            'home':'home'
        },

        home:function () {
            new PostsView({root:$('#main')});
        }
        
    });

    return AppRouter;

});