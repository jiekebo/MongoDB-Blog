define(['backbone', 'view/about-view', 'view/samples-view', 'view/tasks-view'], function (Backbone, AboutView, SamplesView, TasksView) {
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
            new TasksView({root:$('#main')});
        },
        about:function () {
            new AboutView({root:$('#main')});
        },
        tasks:function () {
        	new TasksView({root:$('#main')});
        }
        
    });

    return AppRouter;

});