function CalcController() {
	
    this.init = function() {	    
	    
		var model = new CalkModel,
		    first_number = document.getElementById('first-factor'),		    
			second_number = document.getElementById('second-factor'),
		    operation = document.getElementById('choice-operation'),		
            trigger = document.getElementById('calculation'),
            result_view = document.getElementById('solved'),
			add_btn = document.getElementById('calcs').children,
			clear_value = document.getElementById('clear'),
			i;            		
        
		function getParams() {
		    var params = {};
			params.first = parseFloat(first_number.value, 10);
		    params.second = parseFloat(second_number.value, 10);
			
			return params;
		}
		
		trigger.addEventListener("click", function() {
		    var uri = model.buildUri(operation);
			console.log(uri);
			model.sendAjaxRequest(uri, getParams(), showResult)
		}, false);		        		
		
		first_number.addEventListener("focus", inFocus, false);
        second_number.addEventListener("focus", inFocus, false);
		
		for(i = 0; i < 10; i++) {
			add_btn[i].addEventListener("click", addDigits(i), false);  
		}
		
		function addDigits(value){
		    return function() {
				focussed.value = focussed.value + value;				
		    }
		}

        clear_value.addEventListener("click", function() {
		    first_number.value = " ";			
		}, false); 		

        function showResult(result) {
		    result_view.innerHTML = result;
		}

        function inFocus() {
		    focussed = this;
		} 		
    };	
	
	return this;
}

