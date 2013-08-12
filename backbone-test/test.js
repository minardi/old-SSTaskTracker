var Test = Backbone.Model.extend({
    run: function() {
	    console.log('Hello world');
		$('.hello').text('I am alive too');
	}
});

$(function() {
    var obj = new Test();
	obj.run();
});