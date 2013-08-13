(function(app) {
	app.ItemView = Backbone.View.extend({
		  
		tagName: "tr",
		className: "new-item",
		
		template: JST["item_tpl"],
			
		events: {
			"click .delete" : "destroyModel",
			"dblclick .random" : "editData",
			"mouseenter .delete" : "cursor"		
		},	
		
		render: function() {
				
			this.$el.html(this.template(this.model.toJSON()));

			return this;	
		},   

		editData: function() {
			this.model.set("random", this.model.getRandomDate());
			this.model.save();		
			this.render();			
		},
		
		destroyModel: function() {
			this.model.destroy();
			this.$el.remove();
		},
		
		cursor: function() {
			this.$el.css('cursor', 'pointer');
		}    	
	});
})(sstt);