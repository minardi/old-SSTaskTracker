(function(app) {
    app.ProjectCollectionView = Backbone.View.extend({          
        initialize: function() {
            this.collection = new app.ProjectCollection();

            this.listenTo(this.collection, "reset", this.render);

            this.collection.fetch({reset: true});
        },  

        renderOne: function(project) {
                var view = new app.ProjectView({model: project});
                this.$el.append(view.render().el);                  
        },
        
        render: function() {                            
            this.$el.html("");                                  
            this.collection.each(this.renderOne, this); 
        }           
    });
})(sstt.Project);