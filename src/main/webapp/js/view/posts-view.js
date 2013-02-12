define([ 'backbone', 'resthub', 'bootstrap', 'hbs!template/posts', 'collection/posts', 'view/post-view' ],
function (Backbone, Resthub, Bootstrap, postsTemplate, Posts, PostView) {
    
    var PostsView = Resthub.View.extend({
        
        // Define view template
        template: postsTemplate,
        
        events: {"click #newpost" : 'createOnPost'},

        initialize:function () {        	
            // Initialize the collection
            this.collection = new Posts( );
            
            this.collection.on('add', this.addOne, this);
            this.collection.on('reset', this.addAll, this);
            this.collection.on('change', this.render(), this);
            
            this.render();
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });            
        },
        
        addOne: function(todo) {
        	new PostView({root: $('#post-list'), model: todo});
        },
        
        addAll: function() {
        	this.collection.each(this.addOne);
        },
        
        getPostData: function () {
        	var date = new Date();
        	var time = date.getTime().toString();
        	return {
        		title: this.$('#posttitle').val(),
        		body: this.$('#postbody').val(),
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