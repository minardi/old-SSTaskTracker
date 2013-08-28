(function(app) {
        app.StoryModel = Backbone.Model.extend({
            defaults: {
                "stories": "default story",
                "idUl": "sprintBacklog",
				"stage" : "#to-do"
            }    
        });

})(sstt.Story);