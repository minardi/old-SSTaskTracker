var StikerView = Backbone.View.extend({
    className: "added",
    template: _.template($("#stiker-tpl").html()),			
    events: {
        "click .delete" : "deleteStiker",
        "mouseenter .delete" : "cursor",
        "dragstop" : "stopDrag"				
    },
			
    render: function() {		
				
        this.$el.css({
            "left" : this.model.get("coord_x") + "px",
            "top" : this.model.get("coord_y")+ "px",
            "position" : "absolute"
        });
        this.$el.draggable();								
        this.$el.html(this.template(this.model.toJSON()));
				
        return this;	
    },
			
    deleteStiker: function() {
        this.model.destroy();
        this.$el.remove();
        return false;
    },
			
    cursor: function() {
        this.$el.css('cursor', 'pointer');
    },

    stopDrag: function(event, ui) {
        var width = $(this.el).width(),
            height = $(this.el).height(),
            board = $('.board'),	
            board_left = board.offset().left,
            board_right = board.offset().left + board.width(),
            board_bot = board.offset().top + board.height(),
            board_top = board.offset().top;
					
        if( ui.position.left > board_right || 
            ui.position.left + width < board_left ||
            ui.position.top > board_bot ||
            ui.position.top + height < board_top) {
            this.deleteStiker();
        }
    }						
});