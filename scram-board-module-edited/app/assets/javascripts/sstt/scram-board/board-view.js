(function(app) {

		app.TaskView = Backbone.View.extend({			
		    
            className: "story",
            template: JST["sstt/scram-board/board_tpl"],

            events: {

            	
            },
            

            render: function() {
                
            	this.$el.html(this.template(this.model.toJSON()));
            	var self = this;
            	           	
                $('#to-do, #in-progress, #to-verify, #done').sortable({
                    connectWith: ".connectedSortable",
                    receive: function(event, ui) {
                        var parent_id = this.id;
                        
                        switch(parent_id) {
                            case 'to-do': {
                                self.model.set({"stage" : "1"});
                                break;
                            }
                            case 'in-progress': {
                                self.model.set({"stage" : "2"});
                                
                                break;
                            }
                            case 'to-verify': {
                                self.model.set({"stage" : "3"});
                                break;
                            }
                            case 'done': {
                                self.model.set({"stage" : "4"});
                                break;
                            }
                        }
                        self.model.save();
                        console.log(self.model.get("stage"));
                    }
                });

            	return this;
            },



		});			
})(sstt.Board);