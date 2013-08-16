(function(app) {

		app.Demo = {};			
		app.Demo.start = function(element) {
		   return new this.CatCollectionView({el: element});		   
		};
		
})(sstt);