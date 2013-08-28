(function(app) {

    app.ProjectView = Backbone.View.extend({
        
        tagName: "li",          
        className: "span4",
        
        template: JST["sstt/projects/project-template"],

        events : {
            "mouseenter" : "showProjectInfo",
            "click": "showBacklog"
        },      
        
        render: function() {        
            this.$el.html(this.template(this.model.toJSON()));              
            return this;    
        },

        showProjectInfo: function() {

            var params = {
                "title" : this.model.get("title"),
                "created_at" : String(this.model.get("created_at")).substring(0, 10)
            }

            Backbone.Mediator.pub("project:hover", params);
        },

        showBacklog: function() {
            Backbone.Mediator.pub("project:show", this.model.id);
        }
    });         
})(sstt.Project);