$(function() {
    var Stiker = Backbone.Model.extend({
			defaults: {
				"coord_x": 0,
				"coord_y" : 0
			}
		}),
	
	    StikerCollection = Backbone.Collection.extend({			
			model: Stiker			
		}),
		
		StikerView = Backbone.View.extend({
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
		}),
		
		StikerCollectionView = Backbone.View.extend({
		    initialize: function() {
			    this.collection = new StikerCollection();				
			},	
			
			el: $(".board"),
			
			events: {
			    "click" : "render"				
			},
			
			render: function(e) {
			    var model = new Stiker({"coord_x" : e.pageX, "coord_y": e.pageY});		    				
				
				this.collection.add(model);
				console.log(this.collection.length);
				this.addStick(model);				
			},			
			
			addStick: function(sticker) {
			    var view = new StikerView({
					model: sticker					
				});
				
				this.$el.append(view.render().el);
			}			
		}),
		
		board = new StikerCollectionView();
});