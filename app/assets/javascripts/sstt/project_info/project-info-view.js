(function(app) {
    app.ProjectInfoView = Backbone.View.extend({            
        initialize: function() {
            Backbone.Mediator.sub("project:hover", this.render, this);
        },

        className: "row-fluid",

        template: JST["sstt/project_info/project-info-template"],

        render: function(params) {

            this.$el.html(this.template(params));

            $("#project_info").append(this.$el);            
            
        }
    });
})(sstt.ProjectInfo);