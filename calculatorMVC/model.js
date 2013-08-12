function Calc() {    

    this.calculate = function(operation, params) {
        var result;	
	
		switch (operation.value) {
            case 'sum': {
                result = params.first + params.second;
                break;
            }
            case 'minus': {
                result = params.first - params.second;
                break;
            }
            case 'divide': {
                result = params.first / params.second;
                break;
            }
            case 'multiply': {
                result = params.first * params.second;
                break;
            }
        }    
        return result.toFixed(2);
    };
    
	return this;
}