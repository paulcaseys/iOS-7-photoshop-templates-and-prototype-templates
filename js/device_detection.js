// JavaScript Document


// defines the viewport
var viewport = document.querySelector("meta[name=viewport]"); 

// iphone test
var isIphone = (new RegExp( "iPhone", "i" )).test(navigator.userAgent);
var isIphone = (new RegExp( "iPod", "i" )).test(navigator.userAgent);

// ipad test
var isIpad = (new RegExp( "iPad", "i" )).test(navigator.userAgent);


/////////////////
// overrides the device detection, true for testing on desktop
var overrideDetection = false;

if(overrideDetection){
	isIpad = true;
}

	
///////////////////////////////////////////////
// MAIN CONDITIONAL
// alters css and viewport, depending on device
if(isIphone){
	// iPhone
	document.write("<link rel='stylesheet' href='css/iphone.css' type='text/css'>");
	viewport.setAttribute('content', 'width=320');
	// overrides fraction in canvas_masker.js
	//overrideFractionAmount(540/320);	
} else if (isIpad){
	// ipad
	if(orientation == 0 || orientation == 180 ){
		// ipad portrait
		//defineImage("portrait");
		document.write("<link rel='stylesheet' href='css/ipad.css' type='text/css'>");
		document.write("<link rel='stylesheet' href='css/ipad_port_override.css' type='text/css'>");
		viewport.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0');
		viewport.setAttribute('content', 'width=768');
		alert('hi, this prototype is for iPads in landscape mode. rotate your ipad, please!');
		
	} else {
		// ipad landscape
		//defineImage("landscape");
		document.write("<link rel='stylesheet' href='css/ipad.css' type='text/css'>");
		viewport.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0');
	}
} else {
	// all other (eg desktop)
	//defineImage("landscape");
	document.write("<link rel='stylesheet' href='css/ipad.css' type='text/css'>");
}

///////////////////////
// DETECTS IF USER ROTATES THE DEVICE
// then refreshes it
$(document).ready(function(){ 

	// resizes the canvas
	if (isIpad){
		// ipad
		if(orientation == 0 || orientation == 180 ){
			//port
		}
	}
		
	$(window).bind('orientationchange', function(event) {
	  window.location.reload();
	  $("body").css("visibility","hidden");
	});
});