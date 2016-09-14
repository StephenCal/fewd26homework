// On Page Load/REady
jQuery(document).ready(function(){

	// On click of #submit
	jQuery("#submit").on("click",function(){
		// Get value of A
		var a = parseFloat(jQuery("#a").val());
		// Get value of B
		var b = parseFloat(jQuery("#b").val());
		
		if(a > b){
			// If A > B
			jQuery("#comparison").text(">");
		
		}else if(a == b){
			// If A == B
			jQuery("#comparison").text("=");
		
		}else if(a < b){
			// If A < B
			jQuery("#comparison").text("<");
		
		}else {
			// Not Applicable
			jQuery("#comparison").text("N/A");
			
		}

	});

});