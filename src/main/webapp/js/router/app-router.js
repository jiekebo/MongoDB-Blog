define(['backbone', 'view/about-view', 'view/samples-view', 'view/tasks-view', 'view/posts-view'], function (Backbone, AboutView, SamplesView, TasksView, PostsView) {
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
        },
        tasks:function () {
        	new TasksView({root:$('#main')});
        },
        posts:function () {
        	new PostsView({root:$('#main')});
        }
        
    });

    return AppRouter;

});