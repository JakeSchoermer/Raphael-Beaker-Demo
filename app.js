

// Functions for Application
var run = function() {

	var percentage = document.control_form.liquid_level.value;
	var colour = document.control_form.liquid_colour.value;

	var current_height = liquid.attr('height');
	var current_y = liquid.attr('y');
	var current_colour = liquid.attr('fill');
	
	var new_height = percentage / 100 * 160;
	var new_y = 320 - new_height;

	
	var anim_time = 2000;
	
	if (percentage != null) {				
		liquid.animate({cy: current_y, y: new_y}, anim_time);
		liquid.animate({height: current_height, height: new_height}, anim_time);
	}
	
	if (colour != '') {				
		liquid.animate ({fill: current_colour, fill: colour}, anim_time);
	}
}

