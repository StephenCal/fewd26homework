jQuery(document).ready(function() {

	jQuery(".hamburger").click(function(event){

		event.preventDefault();

		jQuery(".navigation").toggleClass("mobileHidden");

	});

});