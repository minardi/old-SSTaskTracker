(function(app) {

		app.Board = {};			
		app.Board.start = function(element) {
		   return new this.TaskCollectionView({el: element});		   
		};
		
})(sstt);