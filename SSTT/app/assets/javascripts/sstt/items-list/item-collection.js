(function(app) {
	app.ItemCollection = Backbone.Collection.extend({			
		
		model: app.ItemModel,
		
		url: "/items_lists"
		
	});
})(sstt.Items);