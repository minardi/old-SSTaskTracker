(function(app) {
		app.TaskCollectionView = Backbone.View.extend({			
			
            initialize: function() {

            	this.collection = new app.TaskCollection();
            	this.collection.on("reset", this.renderCollection, this);        
		        this.collection.fetch(); 
		        //console.log(this.collection.length)
            },

            events: {
            	
            },


            renderCollection: function() {

            	this.collection.each(function(index,elem) {
                    this.addTask(index);			
                }, this);

                
            	
            },

            addTask: function(task) {
                
                var view = new app.TaskView({model: task});
                   var position = task.get('stage');
                   console.log(position);
                
                switch(position) {
                    case '1': {
                        this.$el.children('#to-do').append(view.render().el);
                        break;
                    }
                    case '2': {
                        this.$el.children('#in-progress').append(view.render().el);
                        break;
                    }
                    case '3': {
                        this.$el.children('#to-verify').append(view.render().el);
                        break;
                    }
                    case '4': {
                        this.$el.children('#done').append(view.render().el);
                        break;
                    }
                }              
                //this.$el.children('#to-do').append(view.render().el);
            },          

		});
})(sstt.Board);