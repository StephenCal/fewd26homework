//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

	jQuery(".readmore").click(function() {

		event.preventDefault();

		jQuery("#show-this-on-click").slideDown();

		jQuery(".readmore").hide();

		jQuery(".readless").show();

	});

	jQuery(".readless").click(function() {

		event.preventDefault();

		jQuery("#show-this-on-click").slideUp();
		
		jQuery(".readmore").show();
		
		jQuery(".readless").hide();

	});

	jQuery(".learnmore").click(function() {

		event.preventDefault();

		jQuery("#learnmoretext").slideDown();

		jQuery(".learnmore").hide();

	});

});