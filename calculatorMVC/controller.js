function CalcController() { 	
	
    this.init = function() {	    
	    var model = new Calc(),
		    first_number = document.getElementById('first-factor'),		    
			second_number = document.getElementById('second-factor'),
		    operation = document.getElementById('choice-operation'),		
            trigger = document.getElementById('calculation'),
            result_view = document.getElementById('solved'),
			add_btn = document.getElementById('calcs').children,
			clear_value = document.getElementById('clear'),
            focussed;			
        
		function getParams() {
		    var params = {};
			params.first = parseFloat(first_number.value, 10);
		    params.second = parseFloat(second_number.value, 10);
			
			return params;
		}
		
		trigger.addEventListener("click", function() {
		    var result = model.calculate(operation, getParams());
			result_view.innerHTML = result;
		}, false);

        first_number.addEventListener("focus", inFocus, false);
        second_number.addEventListener("focus", inFocus, false);
		
		clear_value.addEventListener("click", function() {
		    first_number.value = " ";			
		}, false);
		
		for(i = 0; i < 10; i++) {
			add_btn[i].addEventListener("click", addDigits(i), false);  
		}
		
		function addDigits(value){
		    return function() {
				focussed.value = focussed.value + value;				
		    }
		}

        function inFocus() {
		    focussed = this;
		}      		
    };	
	
	return this;
}
