(function(app) {		
		
		app.TaskCollection = Backbone.Collection.extend({
			
			initialize: function() {

				//this.create(new app.TaskModel());				

				
			},

			model: app.TaskModel,

			url: "/tasks"
			
			
		});		
		
})(sstt.Board);