// makes gallery images translucent
$(document).ready(function() {
	$('#gallery img').css('opacity', .6);
	$('.img-container').hover(function() {
		$(this).children('img').css({'opacity': '1', 'transition': '.5s ease-in'});
	}, function() {
		$(this).children('img').css({'opacity': '.6', 'transition': '.5s ease-in'});
	}); // end hover
}); // end ready


