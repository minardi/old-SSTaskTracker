(function(app) {
        app.TaskCollectionView = Backbone.View.extend({         
            
            initialize: function() {

                this.collection = new app.TaskCollection();
                
                Backbone.Mediator.sub("scrum:show", function(tasks){
                    
                    this.collection = tasks;
                    
                    this.collection.each(this.render, this);
                }, this);
                
                this.$el.find('ul').sortable({ 
                    
                    connectWith: ".connectedSortable",                    
                    
                });         
				
            },           

            render: function(task) {

                var view = new app.TaskView({model: task});                           
                   
                this.$el.find(task.get('stage')).append(view.render().el); 

                return this;

            },            

        });

})(sstt.Board);