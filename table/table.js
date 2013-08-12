function TableMaker() {	
	
	function createNewRow() {
	    var clon = $('tr.row td').clone(),		
		    newRow = $('<tr></tr>').append(clon);
		return newRow;
	}
	
	function addTop() {		
		createNewRow().find('td').each(function(i, value) {
		    $(value).css({'background-color':'#FFF6BB'});
		}).prependTo("#table-wrapper");		
	}
	
	function addBottom() {
	    createNewRow().find('td').each(function(i, value) {
		    $(value).css({'background-color':'#FFE853'});
		}).appendTo("#table-wrapper");	
	}
	function addCollLeft() {
	    $('#table-wrapper tr').each(function(i, value) {
		    $('<td class="left-coll"></td>').css({'background-color':'#FFB5F8'}).prependTo(value);
		});
	}
	function addCollRight() {
	    $('#table-wrapper tr').each(function(i, value) {
		    $('<td class="right-coll"></td>').css({'background-color':'#C3B5FF'}).appendTo(value);
		});
	}
	function addCollInCenter() {
	    var position = Math.floor($('tr.row td').length/2);
		$('#table-wrapper tr').each(function(i, value) {
		    $('<td></td>').css({'background-color':'#CDFFF9'}).insertBefore($(value).find('td').eq(position));
		})
	}

    function addRowInCenter() {
	    var position = Math.floor($('#table-wrapper tr').length/2);
		createNewRow().addClass('middle-row').insertBefore($('#table-wrapper tr').eq(position));
	}	
	
	this.init = function() {
	    $('.right').on('click', addCollRight);
	    $('.left').on('click', addCollLeft);
	    $('.top').on('click', addTop);
	    $('.bottom').on('click', addBottom);
		$('.ins-coll').on('click', addCollInCenter);
		$('.ins-row').on('click', addRowInCenter);
    };
	
	return this;
}