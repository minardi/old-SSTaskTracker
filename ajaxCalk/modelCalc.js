function CalkModel() {		  
	 
	//@ Get HXR - object
		function getAjax() {
			var ajax;
			if(XMLHttpRequest) {
				ajax = new XMLHttpRequest();
			} else {
				ajax = new ActiveXObject();
			}
			return ajax;
		}

        this.buildUri = function(operation) {	
			var uri;
			if(operation.value === "sum") {
				uri = "add.php";
			} else {
					if(operation.value === "minus") {
						uri = "sub.php";
					} else {
							if(operation.value === "divide") {
								uri = "div.php";
							} else {
									if(operation.value === "multiply") {
										uri = "mul.php";    
									}
							}
					}
			}
			return uri;
		}		
	
	//@ open http-dialog
		this.sendAjaxRequest = function(uri, params, callback) {
			var ajax = getAjax();				
			
			ajax.open("GET", uri + "?operand1="+params.first +"&operand2="+params.second, true);
			
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4 && ajax.status == 200) {					
					callback(ajax.responseText);									
				}
			};
			
			ajax.send();	
			
		};
		
	return this;
}