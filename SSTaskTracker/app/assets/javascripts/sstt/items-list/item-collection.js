(function(app) {
	app.ItemCollection = Backbone.Collection.extend({			
		
		model: ItemModel,
		
		url: "/tables"
		
	});
})(sstt);