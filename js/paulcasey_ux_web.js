
$(document).ready(function(){ 

	// window var once, so it doesn't keep referencing, lowering performance
	var view = $( window );
	
	var item_selected = 0;

	var item_array = [
						
						{
							// 0
							"array_of_items":	[3, 4, 5, 1, 2, 3, 4],
							"text":				"hello"
						},
						{
							// 1
							"array_of_items":	[4, 5, 1, 2, 3, 4, 5],
							"text":				"goodbye"
						},
						{
							// 2
							"array_of_items":	[5, 1, 2, 3, 4, 5, 1],
							"text":				"goodbye"
						},
						{
							// 3
							"array_of_items":	[1, 2, 3, 4, 5, 1, 2],
							"text":				"goodbye"
						},
						{
							// 4
							"array_of_items":	[2, 3, 4, 5, 1, 2, 3],
							"text":				"goodbye"
						}
						
					]
						
	// nav placeholder to expand and replace
	var nav_bar_div = $("#nav_bar");
	
	var myScroll_back_1;
	var myScroll_back_2;
	var myScroll_back_3;
	var myScroll_back_4;
	var myScroll_back_5;
	var myScroll_back_6;
	var myScroll_back_7;
	var myScroll_back_8;
	var myScroll_back_9;
	var myScroll_back_10;
	var myScroll_front_1;
	var myScroll_front_2;
	var myScroll_front_3;
	var myScroll_front_4;
	var myScroll_front_5;
	var myScroll_front_6;
	var myScroll_front_7;
	var myScroll_front_8;
	var myScroll_front_9;
	var myScroll_front_10;

	var offsetMenu = 1;
	var prev_panel_targ_num_array = [];
	var prev_panel_depth_array = [];
	var typeOfFlow = ""

	var null_obj = new Object();
	
	// detects the scroll location, for nav style/position
	function initAll() { 	

		// adds scrolling functionality
		myScroll_back_1 = new iScroll('panel_back_1_wrapper');
		myScroll_front_1 = new iScroll('panel_front_1_wrapper');
		myScroll_front_2 = new iScroll('panel_front_2_wrapper');

		///////////////////////
		// EAXPLE CLICK 
		
		// declares current object
		var curObj = item_array[1];
		
		// declares current targ
		var cur_div = "#nav_bar";
		
		// defines the click event type for ipad vs desktop
		var ua = navigator.userAgent;
		var event_type = (ua.match(/iPad/i)) ? "touchstart" : "click";
			
		
		////////////////////////////
		//	MENU
		var navi01Obj = new Object();
		var navi02Obj = new Object();
		var navi03Obj = new Object();
		var navi04Obj = new Object();
		var navi05Obj = new Object();
		navi01Obj.new_item_selected = 1;
		navi02Obj.new_item_selected = 2;
		navi03Obj.new_item_selected = 3;
		navi04Obj.new_item_selected = 4;
		navi05Obj.new_item_selected = 5;
		
		$("#navi #navi_1").bind(event_type, navi01Obj, naviHandler);
		$("#navi #navi_2").bind(event_type, navi02Obj, naviHandler);
		//$("#navi #navi_3").bind(event_type, navi03Obj, naviHandler);
		$("#navi #navi_4").bind(event_type, navi04Obj, naviHandler);
		$("#navi #navi_5").bind(event_type, navi05Obj, naviHandler);
		
		function naviHandler(e) {
			// click state
			positionNavHighlight(e.data.new_item_selected);
			gotoItem(e.data.new_item_selected, "back");
		}

		
		////////////////////////////
		//	SIDEMENU
		var sidemenu1Obj = new Object();
		var sidemenu2Obj = new Object();
		var sidemenu3Obj = new Object();
		var sidemenu4Obj = new Object();
		var sidemenu5Obj = new Object();
		var sidemenu6Obj = new Object();
		sidemenu1Obj.new_item_selected = 1;
		sidemenu2Obj.new_item_selected = 2;
		sidemenu3Obj.new_item_selected = 3;
		sidemenu4Obj.new_item_selected = 4;
		sidemenu5Obj.new_item_selected = 5;
		sidemenu6Obj.new_item_selected = 6;
		
		$("#sidemenu #sidemenu_1").bind(event_type, sidemenu1Obj, sidemenuHandler);
		$("#sidemenu #sidemenu_2").bind(event_type, sidemenu2Obj, sidemenuHandler);
		$("#sidemenu #sidemenu_3").bind(event_type, sidemenu3Obj, sidemenuHandler);
		$("#sidemenu #sidemenu_4").bind(event_type, sidemenu4Obj, sidemenuHandler);
		$("#sidemenu #sidemenu_5").bind(event_type, sidemenu5Obj, sidemenuHandler);
		$("#sidemenu #sidemenu_6").bind(event_type, sidemenu6Obj, sidemenuHandler);
		
		function sidemenuHandler(e) {
			// click state
			//gotoItem(e.data.new_item_selected, "back");
			hideSideMenuHandler();
		}
		/**/
		// click state
		$("#but_sidemenu_overlay").bind(event_type, null_obj, hideSideMenuHandler);

		


		//////////////////////////////////////////////
		// panel BACK 1	

		// click state
		$("#panel_group_back #panel_1 #but_1").bind(event_type, null_obj, showFrontPanel1);
		function showFrontPanel1(e) {
			gotoItem(1, "front");
		}

		// click state
		$("#panel_group_back #panel_1 #non_content_but_1").bind(event_type, null_obj, showSideMenuHandler);
		
		// click state
		$("#panel_group_back #panel_1 #non_content_but_2").bind(event_type, null_obj, showFrontPanel2);
		function showFrontPanel2(e) {
			gotoItem(2, "front");
		}


		//////////////////////////////////////////////
		// panel FRONT 1	

		// click state
		$("#panel_group_front #panel_1 #but_back").bind(event_type, null_obj, goBackHandler);

		//////////////////////////////////////////////
		// panel FRONT 2	

		// click state
		$("#panel_group_front #panel_2 #but_back").bind(event_type, null_obj, goBackHandler);




		//////////////////////////////////////////////
		// POPOVER	

		// click state
		$("#navi #navi_3").bind(event_type, null_obj, showAddItemPopupHandler);
		function showAddItemPopupHandler(e) {
			typeOfFlow = "add";
			showAddItemPopup();
		}
		// click state
		$("#panel_popover_1 #but_1").bind(event_type, null_obj, hideAddItemPopupHandler);
		function hideAddItemPopupHandler(e) {
			hideAddItemPopup();
		}





		//////////////////////////////////////////////
		//////////////////////////////////////////////
		// COMMON CLICK HANDLERS

		function goBackHandler(e) {
			goBack();
		}
		function showSideMenuHandler(e) {
			showSideMenu();
		}
		function hideSideMenuHandler(e) {
			hideSideMenu();
		}


		//////////////////////////////////////////////
		//////////////////////////////////////////////
		// renders the first item

		gotoItem(1, "back");
		positionNavHighlight(1);

		//////////////////////////////////////////////
		//////////////////////////////////////////////
		// hides irrellevant items
		$("#panel_loading").css("display", "none");
		$("#panel_popover_1").css("display", "none");
		$("#but_sidemenu_overlay").css("display", "none");
		hideAddItemPopup();

		
	}
	function showAddItemPopup() {
		$("#panel_popover_1").css("display", "block");
		$("#panel_popover_1_bg").fadeIn();
		$("#panel_popover_1_content").css("top", "480px");
		$("#panel_popover_1_content").animate({top:0}, 200);
	}
	function hideAddItemPopup() {
		$("#panel_popover_1").css("display", "none");
		$("#panel_popover_1_bg").css("display", "none");
		$("#panel_popover_1_content").css("top", "0px");
		$("#panel_popover_1_content").animate({top:480}, 200);
	}


	function goBack() {
		var prev_targ_num = prev_panel_targ_num_array[prev_panel_targ_num_array.length-2];
		var prev_depth = prev_panel_depth_array[prev_panel_depth_array.length-2];

		gotoItem(prev_targ_num, prev_depth);

		prev_panel_targ_num_array.pop();
		prev_panel_targ_num_array.pop();

		prev_panel_depth_array.pop();
		prev_panel_depth_array.pop();
	}
	

	function showSideMenu() {
		$("#main_panel_container").animate({left:260, width:60}, 200);
		$("#but_sidemenu_overlay").css("display", "block");
	}
	function hideSideMenu() {
		$("#main_panel_container").animate({left:0, width:320}, 200);
		$("#but_sidemenu_overlay").css("display", "none");
	}
	
	function gotoItem(targ_num, depth) {

		
		prev_panel_targ_num_array.push(targ_num);
		prev_panel_depth_array.push(depth);


		if(depth == "back"){
			$("#panel_group_front").css("display", "none");
			$("#panel_group_back").css("display", "block");
		} else {
			$("#panel_group_front").css("display", "block");
			$("#panel_group_back").css("display", "none");
			
		}

		/**/
		// hides all other panels
		for( i=1; i < 11; i++){	
			if($("#panel_group_back #panel_"+i)){
				$("#panel_group_back #panel_"+i).css("display", "none");
			}				
			if($("#panel_group_front #panel_"+i)){
				$("#panel_group_front #panel_"+i).css("display", "none");
			}		
		}

		// displays the correct panel
		$("#panel_group_"+depth+" #panel_"+targ_num).css("display", "block");

		/*
		if(targ_num == 2 && depth == "back"){
			myScroll_2.scrollTo(0, 0, 0);
		} else if(targ_num == 4 && depth == "back"){
			myScroll_4.scrollTo(0, 0, 0);
		} else if (targ_num == 5 && depth == "back"){
			myScroll_5.scrollTo(0, 0, 0);
		}
		
		*/

		

	}

	function positionNavHighlight(targ_num) {
		var targX= (targ_num-1)*320;
		$("#navi").css("backgroundPosition", "-"+targX+"px 0px");
	}
	
	
	
	// inits it all
	initAll();
	
});