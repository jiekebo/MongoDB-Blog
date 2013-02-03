define(['backbone', 'view/posts-view', 'view/newpost-view'], function (Backbone, PostsView, NewPostView) {
    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({ pushState: true, root: "/" });
        },

        routes:{
            '':'home',
            'home':'home',
            'newpost':'newpost'
        },

        home:function () {
            new PostsView({root:$('#main')});
        },
        newpost:function () {
        	new NewPostView({root:$('#main')});
        }
        
    });

    return AppRouter;

});