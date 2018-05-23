/**
** ** ** ** 
** 
	General Overrides
**
** ** ** ** 
**/

    $(function () {
		$('[data-toggle="tooltip"]').tooltip()
		$('[data-toggle="popover"]').popover()
	});

	// add scroll class to navbar on scoll to ### 
	$(window).scroll(function(){
		if($(window).scrollTop() > 50){
			$('body').addClass('scroll');
			Waypoint.refreshAll();
		}else{
			$('body').removeClass('scroll');
			Waypoint.refreshAll();
		}
	});
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.pagescroll').bind('click', function(event) {
	        var $anchor = $(this);
	        var scroll_position = $($anchor.attr('href')).offset().top - 25;
	        $('html, body').stop().animate({
	            scrollTop: scroll_position
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
	// remove the focused state after click,
	// otherwise bootstrap will still highlight the link
	$("a").mouseup(function(){
	    $(this).blur();
	});

/**
** ** ** ** 
** 
	.subtle-ease-in ADD CLASS TO EL GETTING .ANIMATE CLASS
**
** ** ** ** 
**/

	function subtleEaseIn(item ){
		$(item).addClass('animate');
	}

	//Aninmated ELs

	// $('.video-intro').waypoint({
	// 	handler: function(direction) {
	// 		subtleEaseIn('.intro');
	// 	},
	// 	offset: '85%'
	// });


	// $('.hero').waypoint({
	// 	handler: function(direction) {
	// 		subtleEaseIn('.hero-overlay');
	// 	},
	// 	offset: '85%'
	// });


/**
** ** ** ** 
** 
	Add Links To hash
**
** ** ** ** 
**/
	// $(function(){

	// 	// Javascript to enable link to tab
	// 	var url = document.location.toString();

	// 	if (url.match('#')) {
	// 	    $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
	// 	} 

	// 	// Change hash for page-reload
	// 	$('.nav-pills a').on('shown.bs.tab', function (e) {
	// 	    window.location.hash = e.target.hash;
	// 	    $("html, body").animate({ scrollTop: $('#railcars').offset().top }, 0);
	// 	})
	// 	$('.nav-railcars .subnav a').on('click', function (e) {
	// 	    window.location.hash = e.target.hash;
	// 	    $('.railcars-tabs-wrap a[href="'+e.target.hash+'"]').tab('show');
	// 	    $('.nav-railcars .subnav a[href="#' + url.split('#')[1] + '"]').tab('show');
	// 	    $("html, body").animate({ scrollTop: $('#railcars').offset().top }, 1000);
	// 	})
	// });









