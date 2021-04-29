$(document).ready(function() {

var title = $('div.support h4'), content = $('div.support p');
	
	content.hide();
					  
	title.first().addClass('active').nextUntil('h4').slideDown('normal');
	
		title.click(function(event) {
		
		event.preventDefault();
		
		if($(this).attr('class') != 'active') {	
			$(this).nextUntil('h4').stop(true, true).slideToggle('normal');
			title.removeClass('active');
			$(this).addClass('active');
		}
});
		
});