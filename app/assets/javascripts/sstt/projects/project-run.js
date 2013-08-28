(function(app) {

    app.Project = {};           
    app.Project.start = function(element) {
       return new this.ProjectCollectionView({el: element});           
    };
        
})(sstt);