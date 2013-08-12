var StikerCollectionView = Backbone.View.extend({
    initialize: function() {
        this.collection = new StikerCollection();				
    },
	
    el: $(".board"),
	
    events: {
        "click" : "render",
        "reset" : "addStick"		
    },
	
    render: function(e) {
        var model = new Stiker({"coord_x" : e.pageX, "coord_y": e.pageY});		    				
        
        this.collection.create(model);
        console.log(this.collection.length);
        this.addStick(model);       		
    },
	
    addStick: function(sticker) {
        var view = new StikerView({        
        model: sticker					
        });
    
        this.$el.append(view.render().el);
    }			
});