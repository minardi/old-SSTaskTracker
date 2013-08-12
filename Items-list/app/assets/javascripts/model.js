var Item = Backbone.Model.extend({
	
	defaults: {
        "number": "1",
        "date" : "",
        "random" : ""
    },
	
	getRandomDate: function() {
        
	    var dt = new Date(),		
            hour = dt.getHours(),
	        minutes = dt.getMinutes(),
	        second = dt.getSeconds(),
			
	        time = hour + "3" + minutes + second,
			
            hash = CryptoJS.SHA256(time),
            random_data = (hash.toString(CryptoJS.enc.Hex));
        
        random_data = random_data.substring(7,-7);
        
        return random_data;
    },
	
	getCurrentDate: function() {
        
		var date = new Date(),
            month = date.getMonth()+1,
            data = date.getDate(),
            year = 	date.getFullYear();            			
        
		month = (month < 10) ? "0" + month : month;
		data = (data < 10) ? "0" + data : data;
		
		return (month + '/' + data + '/' + year);
        
    },
});