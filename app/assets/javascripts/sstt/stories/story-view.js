(function(app) {
        app.StoryView = Backbone.View.extend({
            initialize: function () {
                this.$el.draggable({
                    scope: "story",
                    appendTo: "#productBacklog, #sprintBacklog",
                    scope: "story"
                });
            },
            
            template: JST["sstt/stories/story_tpl"],
            
            className: "my",
            
            events: {
                "click .del": "deleteStories",
                "dragstop": "dissolve",
                "dblclick": "subTask"
            },
            
            subTask: function () {
                console.log("Здесь будет модальное окно");
            },
            
            dissolve: function (event, ui) {
                var sprint = $("#sprintBacklog"),
                    product = $("#productBacklog"),
                    sprintWidth = sprint.outerWidth(true),
                    productWidth = product.outerWidth(true),
                    sprintHeight = sprint.outerHeight(true),
                    productHeight = product.outerHeight(true),
                    sprintOffs = sprint.offset(),
                    productOffs = product.offset(),
                    sprintSpotHeight = sprintOffs.top + sprintHeight,
                    sprintSpotWidth = sprintOffs.left + sprintWidth,
                    productSpotHeight = productOffs.top + productHeight,
                    productSpotWidth = productOffs.left + productWidth;
                
                if(ui.offset.top > sprintOffs.top &&
                   ui.offset.top < sprintSpotHeight &&
                   ui.offset.left > sprintOffs.left &&
                   ui.offset.left < sprintSpotWidth) {
						this.model.save({"idUl": "sprintBacklog"});
						this.remove();
						$(sprint).append(this.$el);
						// $(this).appendTo(sprint);
                } else {
                    if(ui.offset.top > productOffs.top && 
                       ui.offset.top < productSpotHeight &&
                       ui.offset.left > productOffs.left &&
                       ui.offset.left < productSpotWidth) {
						   this.model.save({"idUl": "productBacklog"});
						   this.remove();
						   // this.render();
                   }
                }
                
            },
            
            deleteStories: function () {
                this.remove();
                this.model.destroy();
            },
            
            render: function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

})(sstt.Story);