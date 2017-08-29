// makes gallery images translucent
$(document).ready(function() {
	$('#gallery img').css('opacity', .7);
	$('.img-container').hover(function() {
		$(this).children('img').css({'opacity': '1', 'transition': '.5s ease-in'});
	}, function() {
		$(this).children('img').css({'opacity': '.7', 'transition': '.5s ease-in'});
	}); // end hover
}); // end ready


// slides up the main banner
/*$(document).ready(function() {
	$('#banner-btn').click(function() {
		$('#main-banner').slideToggle('slow');  // end slideToggle
	}); // end click
}); // end ready


