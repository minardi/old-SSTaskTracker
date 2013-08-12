function Timer() {
	
	this.renderTime = function() {
	    var date = new Date,
		    hour = checkTime(date.getHours()),
			minutes = checkTime(date.getMinutes()),
			second = checkTime(date.getSeconds()),			
			
			day = checkTime(date.getDate()),
			month = checkTime(date.getMonth() + 1),			
			year = date.getFullYear(),
			
			dateNow = {};
			
			function checkTime(i) {
		        if (i < 10) {
			        i = "0" + i;			
		        }		
		        return i;
	        };
			
			dateNow.result_full = hour + ":" + minutes + ":" + second;
			dateNow.result_short = hour + ":" + minutes;
			dateNow.result_data = day + "/" + month + "/" + year;
			
		return  dateNow;	
	};			
		
	this.getFullTime = function() {		
		var result = this.renderTime().result_full;
		return result;
	};
	
	this.getShortTime = function() {
		var result = this.renderTime().result_short;
		return result;
	};
	
	this.getThisDate = function() {
		var result = this.renderTime().result_data;
		return result;
	};
	
	return this;
}