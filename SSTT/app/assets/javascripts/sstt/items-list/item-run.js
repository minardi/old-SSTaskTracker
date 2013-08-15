(function(app) {
    
	app.Items = {};
	app.Items.start = function(element) {
	    return new this.ItemCollectionView({el: element});
	};
	
})(sstt);