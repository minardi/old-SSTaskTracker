(function(app) {

		
		app.Story = {};			
		app.Story.start = function() {

			$("#contentApp").html(JST["sstt/stories/plaining_tpl"]);
			
		   app.stories = new app.Story.StoryCollectionView({el: $("#plain")});		   
		};
		
		Backbone.Mediator.sub("project:show", app.Story.start);
})(sstt);