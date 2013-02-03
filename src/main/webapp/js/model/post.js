define([ 'underscore', 'backbone', /*'dateformat'*/ ], function(_, Backbone) {

	var PostModel = Backbone.Model.extend({

		defaults : {
			title : "empty name"
		},

		initialize : function() {
//			var isodate = this.get('date');
//			var date = new Date(isodate);
//			this.set({
//				'date' : date.format("dddd, mmmm dS, yyyy, h:MM:ss TT")
//			});
		}

	});
	return PostModel;
});
