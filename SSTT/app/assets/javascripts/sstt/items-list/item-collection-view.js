(function(app) {
	app.ItemCollectionView = Backbone.View.extend({
		
		initialize: function() {
			this.collection = new app.ItemCollection();
			this.i = 1;
			this.collection.on("reset", this.updateCollection, this);        
			this.collection.fetch();        		
		},
		
		events: {
			"click #add" : "render",
			"mouseenter #add" : "cursor"		
		},    		
		
		render: function() {
			var model = new app.ItemModel();
			console.log(model);
			model.set({
				"number" : this.setNumber(),
				"date" : model.getCurrentDate(),
				"random" : model.getRandomDate()
			});		
			this.collection.create(model);        
			this.addOne(model);
			console.log(this.collection.length);		
		},      			
		
		addOne: function(model) {
			var view = new app.ItemView({
				model: model					
			});
			
			this.$el.children('#items').append(view.render().el);
		},

		updateCollection: function() {
			
			this.collection.each(function(index,elem) {
				this.addOne(index);			
			}, this);
		},	
		
		cursor: function() {
			this.$el.css('cursor', 'pointer');
		},

		setNumber: function() {	    
		return (this.i++);
		}	
	});
})(sstt.Items);
