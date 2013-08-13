(function(app) {
		app.CatCollectionView = Backbone.View.extend({			
			initialize: function() {
				this.collection = new app.CatCollection();
			},								
		
			events: {
				"click": "render"
			},
			
			renderOne: function(cat) {
					var view = new app.CatView({model: cat});
					this.$el.append(view.render().el);					
			},
			
			render: function() {			   				
				this.$el.html("");									
				this.collection.each(this.renderOne, this);	
			}			
		});
})(sstt.Demo);