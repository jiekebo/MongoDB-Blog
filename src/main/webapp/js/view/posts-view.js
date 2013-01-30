define([ 'backbone', 'resthub', 'collection/posts', 'hbs!template/posts' ],
function (Backbone, Resthub, Posts, postsTemplate) {
    
    var PostsView = Resthub.View.extend({
        
        // Define view template
        template: postsTemplate,

        initialize:function () {
            // Initialize the collection
            this.collection = new Posts();
            
            // Render the view when the collection is retreived from the server
            this.collection.on('reset', this.render, this);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        }

    });
    return PostsView;
});