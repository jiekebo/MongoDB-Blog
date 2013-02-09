define([ 'backbone', 'resthub', 'bootstrap', 'collection/posts', 'hbs!template/posts' ],
function (Backbone, Resthub, Bootstrap, Posts, postsTemplate) {
    
    var PostsView = Resthub.View.extend({
        
        // Define view template
        template: postsTemplate,
        
        events: {"click #newpost" : 'createOnPost'},

        initialize:function () {
            // Initialize the collection
            this.collection = new Posts();
            
            // Render the view when the collection is retreived from the server
            this.collection.on('reset', this.render, this);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
            
            this.collection.on('change', this.render, this);
        },
        
        getPostData: function () {
        	var date = new Date();
        	var time = date.getTime().toString();
        	return {
        		author: "Testuser",
        		title: this.$('#title').val(),
        		body: this.$('#body').val(),
        		tags: ["newpost", "also newpost"],
        		permalink: "test",
        		date: time,
        		comments: []
        	};
        },
        
        createOnPost: function () {
        	this.collection.create(this.getPostData());
        },

    });
    return PostsView;
});