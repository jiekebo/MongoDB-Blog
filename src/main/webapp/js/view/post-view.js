define([ 'underscore', 'backbone', 'resthub', 'bootstrap', 'hbs!template/post' ],
function (_, Backbone, Resthub, Bootstrap, postTemplate) {
    
    var PostView = Resthub.View.extend({
        
        // Define view template
    	strategy: 'prepend',
        template: postTemplate,
        
        events: {"click #newcomment" : 'createComment'},
        

        initialize:function (options) {            
            this.model.on('change', this.render, this);
            this.render();
        },
        
        createComment: function(model) {
        	this.model.attributes.comments.push({'body': this.$('#commentbody').val(), 'email': this.$('#commentemail').val(), 'author': this.$('#commentname').val()});
        	this.model.save();
        	this.render();
        },

    });
    return PostView;
});