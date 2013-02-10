define([ 'underscore', 'backbone' ], function(_, Backbone) {

	var PostModel = Backbone.Model.extend({

		defaults : {
			title : "Default Title",
			author : "Default User",
			date : "0",
			tags : "New Tag"
		}

	});
	return PostModel;
});
