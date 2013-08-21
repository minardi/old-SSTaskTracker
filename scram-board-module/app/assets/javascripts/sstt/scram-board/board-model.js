(function(app) {
		app.TaskModel = Backbone.Model.extend({
		    
            defaults: {

            	"x" : 0,
            	"y" : 0,
            	"text" : "" 
            },

            stege: 0,

		});

})(sstt.Board);