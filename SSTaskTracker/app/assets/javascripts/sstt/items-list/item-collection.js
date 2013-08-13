(function(app) {
	app.ItemCollection = Backbone.Collection.extend({			
		
		model: app.ItemModel,
		
		url: "/tables"
		
	});
})(sstt);
