define([ 'underscore', 'backbone' ], function(_, Backbone) {

	var CommentModel = Backbone.Model.extend({

		defaults : {
			author: "default commenter",
			email: "default@email.com",
			body: "default comment"
		}

	});
	return CommentModel;
});
