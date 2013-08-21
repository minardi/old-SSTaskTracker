(function(app) {
		app.TaskCollectionView = Backbone.View.extend({			
			
            initialize: function() {

            	this.collection = new app.TaskCollection();
            	this.collection.on("reset", this.renderCollection, this);        
		        this.collection.fetch(); 
		        //console.log(this.collection.length)
            },

            events: {

            	"click": "add"
            },


            renderCollection: function() {

            	this.collection.each(function(index,elem) {
                    this.addTask(index);			
                }, this);

                $('#to-do, #in-progress, #to-verify, #done').sortable({
            		connectWith: ".connectedSortable",
            	}); 
            	
            },

            addTask: function(task) {
 
                var view = new app.TaskView({model: task});
                //if else
                this.$el.children('#to-do').append(view.render().el);

            },

            add: function() {console.log("hello")}
            

		});
})(sstt.Board);