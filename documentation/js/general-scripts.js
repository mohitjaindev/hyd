/* Custom jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
	//Genaral Global variables
	//"use strict";
	var $win = $(window);
	var $doc = $(document);
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	$(document).ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/
		
		/*========================================================== 
		 SCROLL SPY MENU
		========================================================== */
		var lastId,
			topMenu = $(".doc-sidenav ul"),
			topMenuHeight = 68,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		
		menuItems.click(function(e){
			var href = $(this).attr("href");
			var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight+1;
			$('html, body').stop().animate({ 
				scrollTop: offsetTop
			}, 500);
			
			e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function(){
			// Get container scroll position
			var fromTop = $(this).scrollTop()+topMenuHeight;
			// Get id of current scroll item
			var cur = scrollItems.map(function(){
				if ($(this).offset().top < fromTop)
				return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
		   }                   
		});
		
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	

/*All function nned to define here for use strict mode
----------------------------------------------------------------------------------------------------------------------------------------*/


	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);