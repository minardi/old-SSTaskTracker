(function(app) {

		app.CatView = Backbone.View.extend({			
			className: "cat",
			
			template: JST["sstt/demo/cat-template"],
			
			render: function() {		
				this.$el.html(this.template(this.model.toJSON()));				
				return this;	
			}
		});	

		
})(sstt);