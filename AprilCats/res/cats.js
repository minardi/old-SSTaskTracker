$(function() {
	var Cat = Backbone.Model.extend({
			defaults: {
				color: "n/a",
				name: "n/a"
			}		
		}),

		CatCollection = Backbone.Collection.extend({
			initialize: function() {
				this.add(new Cat({"color": "black", "name": "Barsik"}));
				this.add(new Cat({"color": "gray", "name": "Murzik"}));
				this.add(new Cat({"color": "green", "name": "House M.D."}));
				this.add(new Cat({"color": "white", "name": "Pushok"}));
			},
			
			model: Cat
		}),
		
		CatView = Backbone.View.extend({			
			className: "cat",
			
			template: _.template($("#cat-tpl").html()),
			
			render: function() {		
				this.$el.html(this.template(this.model.toJSON()));				
				return this;	
			}
		}),	

		CatCollectionView = Backbone.View.extend({			
			initialize: function() {
				this.collection = new CatCollection();
			},
						
			el: $("#cats"),				
		
			events: {
				"click": "render"
			},
			
			addCat: function(cat) {
				var view = new CatView({model: cat});
				this.$el.append(view.render().el);					
			},
			
			render: function() {			   				
				this.$el.html("");									
				this.collection.each(this.addCat, this);	
			}			
		}),
		
		app = new CatCollectionView();
});