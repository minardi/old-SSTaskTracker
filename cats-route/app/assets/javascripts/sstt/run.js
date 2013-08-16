var sstt = {  
            demo: {},
            router: {}			
        };

$(function() {
    sstt.router = new sstt.Router();
    Backbone.history.start({pushState: true});
	sstt.demo = sstt.Demo.start($("p"));     
});
