(function(app) {

    app.TaskView = Backbone.View.extend({                 
        
        initialize: function() {         
            	this.$el.draggable({
            		containment:'#sections',
            		cursor:'move',
            		opacity:0.55,
            		helper: "clone",
            		connectToSortable:'ul'
            		
            	});            	
	},
	
	events: {
		"dragstop" : "stopMoving"
	},
        
        className: "story",
        
        template: JST["sstt/scrum-board/story_tpl"],

                   
        render: function() {           
                    
            this.$el.html(this.template());
        
            return this;
        },
		
	stopMoving: function(event, ui) {			
		
		var todo = $('#to-do'),
		    progress = $('#in-progress'),
		    verify = $('#to-verify'),
		    done = $('#done'),

		    todo_height = todo.outerHeight(true),
		    todo_width = todo.outerWidth(true),			

		    progress_height = progress.outerHeight(true),
		    progress_width = progress.outerWidth(true),

		    verify_height = verify.outerHeight(true),
		    verify_width = verify.outerWidth(true),

		    done_height = done.outerHeight(true),
		    done_width = done.outerWidth(true);

	
	    if(ui.offset.top > todo.offset().top &&
	          ui.offset.top < todo.offset().top +  todo_height &&
	          ui.offset.left > todo.offset().left &&
	          ui.offset.left < todo.offset().left + todo_width) {
		       
		       this.remove();
		      
		       this.model.save({"stage": "#to-do"});

	    } else {
			    if(ui.offset.top > progress.offset().top && 
			          ui.offset.top < progress.offset().top +  progress_height &&
		                  ui.offset.left > progress.offset().left &&
		                  ui.offset.left < progress.offset().left + progress_width) {
			            
			            this.remove();
			            
			            this.model.save({"stage": "#in-progress"});
	            } else {
	    
				    	if(ui.offset.top > verify.offset().top &&
					        ui.offset.top < verify.offset().top +  verify_height &&
					        ui.offset.left > verify.offset().left &&
					        ui.offset.left < verify.offset().left + verify_width) {
					    		
					    		this.remove();
					    		
					    		this.model.save({"stage": "#to-verify"});
	    	            } else {
	    
						    	if(ui.offset.top > done.offset().top &&
						            ui.offset.top < done.offset().top +  done_height &&
						            ui.offset.left > done.offset().left &&
						            ui.offset.left < done.offset().left + done_width) {
						    		
						    		this.remove();
						    		
						    		this.model.save({"stage": "#done"});
	    						}
	    				}
	    			}
	    		} 	

		
	},

        
    });
                        
})(sstt.Board);
