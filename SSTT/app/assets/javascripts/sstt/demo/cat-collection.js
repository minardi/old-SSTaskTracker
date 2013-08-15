(function(app) {		
		
		app.CatCollection = Backbone.Collection.extend({
			initialize: function() {
				this.add(new app.CatModel({"color": "black", "name": "Barsik"}));
				this.add(new app.CatModel({"color": "gray", "name": "Murzik"}));
				this.add(new app.CatModel({"color": "green", "name": "House M.D."}));
				this.add(new app.CatModel({"color": "white", "name": "Pushok"}));
			},
			
			model: app.emoModel
		});		
		
})(sstt);