var ItemCollectionView = Backbone.View.extend({
	
    initialize: function() {
        this.collection = new ItemCollection();
        this.i = 1;
        this.collection.on("reset", this.updateCollection, this);        
		this.collection.fetch();        		
    },
	
	events: {
        "click #add" : "render",
        "mouseenter #add" : "cursor"		
    },    		
	
    render: function() {
        var model = new Item({
		    "number" : this.setNumber(),
		    "date" : this.model.getCurrentDate(),
			"random" :this.model.getRandomDate()
		});		
	    this.collection.create(model);        
        this.addOne(model);
        console.log(this.collection.length);		
    },      			
	
    addOne: function(model) {
        var view = new ItemView({
            model: model					
        });
		
        this.$el.children('#items').append(view.render().el);
    },

    updateCollection: function() {
        
		this.collection.each(function(index,elem) {
            this.addOne(index);			
        }, this);
    },	
	
	cursor: function() {
		this.$el.css('cursor', 'pointer');
	},

    setNumber: function() {	    
	return (this.i++);
    }	
});
