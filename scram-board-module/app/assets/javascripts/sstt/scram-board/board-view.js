(function(app) {

		app.TaskView = Backbone.View.extend({			
		    
            className: "story",
            template: JST["sstt/scram-board/board_tpl"],

            events: {

            	"dragstop" : "stopDrag"
            },

            stopDrag: function(event, ui) {

                console.log("1111");
               

            },

            render: function() {

            	this.$el.html(this.template(this.model.toJSON()));
            	//this.$el.draggable({
            	//	containment:'#sections',
                //    cursor:"move",
                //     opacity: 0.7,                    
            	//});
            	           	

            	return this;
            },



		});			
})(sstt.Board);