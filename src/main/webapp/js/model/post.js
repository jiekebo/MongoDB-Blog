define([ 'underscore', 'backbone', 'moment' ], function(_, Backbone, Moment) {

	var PostModel = Backbone.Model.extend({

		defaults : {
			title : "empty name"
		},

		initialize : function() {
			var isodate = this.get('date');
			this.set({
				'date' : Moment(isodate).format("MMMM Do YYYY, h:mm:ss a")
			});
		}

	});
	return PostModel;
});
