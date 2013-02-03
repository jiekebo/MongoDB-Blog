define([ 'backbone', 'resthub', 'collection/posts', 'hbs!template/newpost'],
function (Backbone, Resthub, Posts, aboutTemplate) {
    
    var NewPostView = Resthub.View.extend({
        
        // Define view template
        template: aboutTemplate,
        
        events: {"click #newpost" : 'createOnPost'},
        
        initialize:function () {
            // Render the view
        	this.collection = new Posts();
            this.render();
            this.author = this.$('#author');
            this.title = this.$('#title');
            this.body = this.$('#body');
        },
        
        getPostData: function () {
        	var date = new Date();
        	var time = date.getTime().toString();
        	return {
        		author: this.author.val(),
        		title: this.title.val(),
        		body: this.body.val(),
        		tags: ["newpost"],
        		permalink: "test",
        		date: time,
        		comments: [] 
        	};
        },
        
        createOnPost: function () {
        	this.collection.create(this.getPostData());
        	this.resetFields();
        },
        
        resetFields: function() {
        	this.author.val('');
        	this.title.val('');
        	this.body.val('');
        }

    });
    return NewPostView;
});