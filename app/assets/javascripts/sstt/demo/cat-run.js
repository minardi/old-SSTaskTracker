(function(app) {

		app.Demo = {};			
		app.Demo.start = function(element) {
		   return new app.Demo.CatCollectionView({el: element});		   
		};
		
})(sstt);