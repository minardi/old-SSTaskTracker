(function(app) {		
		
		app.TaskCollection = Backbone.Collection.extend({
			
			
			model: app.StoryModel,

			url: "/stories"
			
		});		
		
})(sstt.Board);