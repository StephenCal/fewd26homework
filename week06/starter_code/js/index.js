// Wait for dom elements to load before exicuting
jQuery(document).ready(function() {

	// Create a function that runs every time the submit button is clicked
	jQuery("#submit-btn").click(function() {

		// Prevent the submit button from refreshing the page
		event.preventDefault();

		// Create a variable called cityValue and get the value of #city-type input
		var cityValue = jQuery("#city-type").val();

		// Correct for capitalization and extra spacing
		cityValue = cityValue.toLowerCase().trim();

		// If the user inputs nyc / New York City change the css class to 'nyc'
		if (cityValue == "nyc" || cityValue == "new york city") {
			jQuery("body").attr("class","nyc");

		// If the user inputs sf / San Francisco change the css class to 'sf'
		} else if (cityValue == "sf" || cityValue == "san francisco") {
			jQuery("body").attr("class","sf");

		// If the user inputs la / Los Angeles change the css class to 'la'
		} else if (cityValue == "la" || cityValue == "los angeles") {
			jQuery("body").attr("class","la");

		// If the user inputs atx / Austin change the css class to 'austin'
		} else if (cityValue == "atx" || cityValue == "austin") {
			jQuery("body").attr("class","austin");

		// If the user inputs sy / sydney change the css class to 'sydney'
		} else if (cityValue == "sy" || cityValue == "sydney") {
			jQuery("body").attr("class","sydney");
		}

	});

});