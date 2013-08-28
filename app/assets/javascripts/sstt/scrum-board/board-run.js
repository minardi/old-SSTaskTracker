(function(app) {

		app.Board = {};			
		app.Board.start = function() {
		   $('.tab-content').html(JST['sstt/scrum-board/scrum-board_tpl']);
		   app.board = new app.Board.TaskCollectionView({el: $('#sections')});		   
		};

		Backbone.Mediator.sub('scrum:show', app.Board.start);
		
})(sstt);