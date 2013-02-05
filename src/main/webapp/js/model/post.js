define([ 'underscore', 'backbone', 'moment' ], function(_, Backbone, Moment) {

	var PostModel = Backbone.Model.extend({

		defaults : {
			title : "empty name"
		}

	});
	return PostModel;
});
