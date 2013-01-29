define([ 'backbone', 'resthub', 'collection/tasks', 'hbs!template/tasks' ],
function (Backbone, Resthub, Tasks, tasksTemplate) {
    
    var TasksView = Resthub.View.extend({
        
        // Define view template
        template: tasksTemplate,

        initialize:function () {
            // Initialize the collection
            this.collection = new Tasks();
            
            // Render the view when the collection is retreived from the server
            this.collection.on('reset', this.render, this);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return TasksView;
});