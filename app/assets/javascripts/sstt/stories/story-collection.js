(function(app) {
        app.StoryCollection = Backbone.Collection.extend({
            url: "/stories/",
            
            model: app.StoryModel
        });

})(sstt.Story);