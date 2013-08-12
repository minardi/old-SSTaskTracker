function draggerController() {
	
	this.init = function () {
        var timer = document.getElementById("time"),
            drag = new Dragger();
		
		timer.addEventListener("mousedown", capture, false);		
		
		timer.onmousedown = timer.onselectstart = function() {
            return false;
        }
		
		function capture(e) {
		    var corner_left,
			    corner_top;			
				
			//calculate the coordinates of the corners relative to the window
			    
				corner_left = timer.getBoundingClientRect().left + pageOffset().x;
			    corner_top = timer.getBoundingClientRect().top + pageOffset().y;			
			
			//pass the coordinates of the timer corners  and the click coordinates to model
			    
				drag.getShift(e.pageX, e.pageY, corner_left, corner_top);
		    
			document.addEventListener("mousemove", move, false);
			document.addEventListener("mouseup", stopDrag, false);			
		} 		

        function move(e) {
			var timer_coords = drag.getElementPosition(e.pageX, e.pageY);
			timer.style.left = timer_coords.x;
			timer.style.top = timer_coords.y;
		}
		
		//get current scroll pages			
		
		    function pageOffset() {
						
			    return {
				    x : window.pageYOffset || document.documentElement.scrollTop,
				    y : window.pageXOffset || document.documentElement.scrollLeft
			    };
		    }

        function stopDrag() {		    
			document.removeEventListener("mousemove", move, false);	            				
		}
		
    };
	
	return this;
}