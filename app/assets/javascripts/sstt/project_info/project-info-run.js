(function(app) {

    app.ProjectInfo = {};           
    app.ProjectInfo.start = function() {
        return new this.ProjectInfoView();
    };
        
})(sstt);