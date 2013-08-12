var StikerCollectionView = Backbone.View.extend({
    initialize: function() {        
	this.collection = new StikerCollection();
        this.collection.fetch();
        this.collection.on("reset", this.updateCollection);        
    },   
	
    events: {
        "click" : "addStick"		
    },    
	
    render: function(sticker) {
        var view = new StikerView({model: sticker});
    
        this.$el.append(view.render().el);		
    },

    addStick: function(e) {
        var model = new Stiker({"x" : e.pageX, "y": e.pageY});		    				
        
        this.collection.create(model);
        console.log(this.collection.length);
        this.render(model);        		
    },

    updateCollection: function(collection) {
	    $.each(collection.models, function(i,value) {
	        var sticker_view = new StikerView({model: collection.models[i]});					
		    $(".board").append(sticker_view.render().el);
            });   
    }	
});
