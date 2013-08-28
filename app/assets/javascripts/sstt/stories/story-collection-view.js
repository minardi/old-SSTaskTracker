(function(app) {
      app.StoryCollectionView = Backbone.View.extend({
            initialize: function () {
                this.collection = new app.StoryCollection();
                this.listenTo(this.collection, "reset", this.renderAll);
                this.collection.fetch({reset: true});
                this.$el.find("#productBacklog, #sprintBacklog").droppable({
                    tolerance: "intersect",
                    scope: "story"      
                });
            },

            renderAll: function () {
                this.collection.each(this.render, this);
            },
            
                      
            events: {
                "click #add": "addOneStory",
			    "click #startSprint": "startSprint"
            },

            startSprint: function () {
				
				var sprintCollection = new app.StoryCollection();
				this.collection.each(function (index) {
					if(index.get("idUl") === "sprintBacklog") {
						sprintCollection.add(index);
						//console.log(index);
					}
				}, this);
				Backbone.Mediator.pub("scrum:show", sprintCollection);
			},
			
            render: function (model) {
                var modelId = "#" + model.get("idUl"),
                    View = new app.StoryView({
                        "model": model
                    });
                    
                this.$el.find(modelId).append(View.render().el);
            },
            
            addOneStory: function () {
                var newStory = new app.StoryModel();
                this.render(newStory);
                this.collection.create(newStory);
            }
        });

})(sstt.Story);