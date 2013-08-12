function DivWithEffects() {    
	
	function upDiv() {	    
		$(this).clearQueue();
	    $(this).animate({marginTop: "0px"}, 200)
			   .animate({borderWidth:"2px"},100);
	}
	function downDiv() {
	    $(this).clearQueue();
		$(this).animate({marginTop: "20px"}, 200)
		       .animate({borderWidth:"1px"}, 300);
	}
	
	function showContentText(obj) {
	   	var x = parseInt($(obj).offset().left);	
		
		$('<div class="appeared"></div>').css({
		    'width':'400px',
			'height':'300px',
			'position':'absolute',
			'top':'200px',
			'left': x + 50 + 'px', 
	        'border':'1px solid #124671',
			'background-color': '#BBBBBB'
		}).appendTo('body');		
		
		$.ajax({
		    type: "GET",
			url: "text.php",
			success: function(data) {
				$('.appeared').html(data);
			}				
		});			
	    
	}

    function hideContentText() {
	    $('.appeared').remove();		
	}	
	
	this.init = function() {
	    
		var block = $(".block"),
		    showTimeout;
			
		block.hover(upDiv, downDiv);		
		   
        block.mouseenter(function() {
            var obj = this;
            showTimeout = setTimeout(function() {
            showContentText(obj);
            }, 1000);
        });
		
		block.mouseleave(function() {
            hideContentText();
            clearTimeout(showTimeout);
        });
	};
	
    return this;
}

