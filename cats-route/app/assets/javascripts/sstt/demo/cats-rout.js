(function(app) {

    app.Router = Backbone.Router.extend({
	    
		routes: {
		    "" : "index",
			"planing" : "f1",
			"scramboard" : "f2"
		},
		
		index: function() {
		    console.log("default");
		},
		
		f1: function() {
		    console.log("planing");
		},
		
		f2: function() {
		    console.log("scramboard");
		}
		
	});



})(sstt);