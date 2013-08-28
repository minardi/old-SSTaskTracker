(function(app) {        
    
    app.ProjectCollection = Backbone.Collection.extend({
        
        model: app.ProjectModel,

        url: "/projects"

    });     
    
})(sstt.Project);