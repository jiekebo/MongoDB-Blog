define(['backbone', 'view/about-view', 'view/posts-view'], function (Backbone, AboutView, PostsView) {
    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: true, root: "/" });
        },

        routes:{
            '':'home',
            'home':'home',
            'about':'about'
        },

        home:function () {
            new PostsView({root:$('#main')});
        },
        about:function () {
            new AboutView({root:$('#main')});
        }
        
    });

    return AppRouter;

});