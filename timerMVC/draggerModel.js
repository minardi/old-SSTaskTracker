function Dragger() {
    
	var shift_x,
	    shift_y;
	
	//calculate the delta of the coordinates between corner and clique
	
	    this.getShift = function(page_x, page_y, corner_left, corner_top) {
	    
		    shift_x = page_x - corner_left;
		    shift_y = page_y - corner_top;
	    }; 
	
	//calculate the coordinates of a drag-element
    
	    this.getElementPosition = function(page_x, page_y) {
	
		    return {
		        x : page_x - shift_x + "px",
			    y : page_y - shift_y + "px"
		    };
	    }; 
    
	return this;
}