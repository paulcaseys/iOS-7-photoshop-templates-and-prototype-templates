Quickly create iOS7 iPhone App prototypes
============================
This framework helps you create iPhone app prototypes.

It incudes Photoshop templates for iOS7.

Only basic html/css/js knowledge is required to use this framework.

Demo
-----------------------------
A demo of the iOS 7 version can be viewed at paulcasey.net
http://paulcasey.net/clients/labs/_base_iphone_prototype/


Overview of features
-----------------------------

common design patterns:
- tabs OR
- junk box menu
- pull to refresh
- back button
- popup overlay

quickly add slices from:
-	photoshop
-	illustrator
-	omnigraffle

prepared files:
- retina display compatible
- base panals


Create a new page with scrolling
-----------------------------
create new scrolling page is as simple as adding `myScroll_back_1 = new iScroll('panel_back_1_wrapper');` to the `initAll()` function in `js/paulcasey_ux_web.js`

Create a 'back' button
-------------------------------
the html and javascript already contains back button functionality, you just need to switch them on in the css. eg:

	#panel_group_front #panel_2 #but_back {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 65px;
		height: 43px;
		z-index: 5;
		cursor: pointer;
	}

Display the side menu ('junk box')
------------------------
an example side menu botton already exists in the top left of the page. to display the menu at any point, simply call `showSideMenu();`

Base PSDs
---------------------
i've included some base PSDs with layer comps, to help with wireframing. the default height of a page is 2400px, but you can obviously change this in the css. the psds can be found in `_psd_examples`.