function TimeController() {
    
	this.init = function() {
	    var time_input = document.getElementById('time'),
		    timer = new Timer(),
			render,
		    flag_btn = 0,
			count_click = 1;		
		
		render = function() {		    
			if(flag_btn === 1) {
		        time_input.innerHTML = timer.getFullTime();
		    } else if(flag_btn === 0) {
		        time_input.innerHTML = timer.getShortTime();
		    } else if(flag_btn === 2) {
			    time_input.innerHTML = timer.getThisDate();
			} 
		};
		
		timeInterval = setInterval(render,1000);		
		
		time_input.addEventListener("click", clickMeLeft, false);		
		time_input.addEventListener("contextmenu", clickMeRight, false);
		time_input.addEventListener("mouseover", mouseOver, false);
		
		function clickMeLeft(e) {
		    e.preventDefault();
			count_click++;
		    
	        flag_btn = (count_click % 2 == 1) ? flag_btn = 0 : flag_btn = 1;					
		}
			
		function clickMeRight(e) {
		    flag_btn = 2;
			e.preventDefault();		    
		}		
		
		function mouseOver() {
		    time_input.style.cursor = "pointer";
		}        	
	};
	
	return this;
}