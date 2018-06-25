/**
** ** ** **
**
	General Overrides
**
** ** ** **
**/

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
});

// add scroll class to navbar on scoll to ###
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('body').addClass('scroll');
    Waypoint.refreshAll();
  } else {
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
$("a").mouseup(function() {
  $(this).blur();
});

/**
** ** ** **
**
	.subtle-ease-in ADD CLASS TO EL GETTING .ANIMATE CLASS
**
** ** ** **
**/

function subtleEaseIn(item) {
  $(item).addClass('fadeInUp');
}

function subtleEaseLeft(item) {
  $(item).addClass('fadeInLeft');
}

function delayedEaseIn(item) {
  setTimeout(function() {
    $(item).addClass('fadeInUp');
  }, 700);
}
//Aninmated ELs
//
// $('#who-we-are .container').waypoint({
//   handler: function(direction) {
//     //set timeout to delay this
//
//     delayedEaseIn('#who-we-are .container');
//
//   },
//   offset: '85%'
// });

// $('.page-header-img .container').waypoint({
//   handler: function(direction) {
//     subtleEaseIn('.page-header-img .container');
//   },
//   offset: '85%'
// });
//fade in from left - step one of "a path forward"

$('#how-it-works .steps-row-one #row-one-copy').waypoint({
  handler: function(direction) {
    subtleEaseLeft('#how-it-works .steps-row-one #row-one-copy');
  },
  offset: '80%'
});
//fade in steps 1 - 4 of row two of "a path forward"
$('#how-it-works .steps-row-two .step-1 .step-container').waypoint({
  handler: function(direction) {
    subtleEaseLeft('#how-it-works .steps-row-two .step-1 .step-container');
    setTimeout(function() {
      subtleEaseLeft('#how-it-works .steps-row-two .step-2 .step-container');
    }, 400);
    setTimeout(function() {
      subtleEaseLeft('#how-it-works .steps-row-two .step-3 .step-container');
    }, 800);
    setTimeout(function() {
      subtleEaseLeft('#how-it-works .steps-row-two .step-4 .step-container');
    }, 1200);
  },
  offset: '80%'
});


$('.steps-row-three .step-3-teaser').waypoint({
  handler: function(direction) {
    subtleEaseIn('.steps-row-three .step-3-teaser');
  },
  offset: '80%'
});

$('#faq #accordion .card').waypoint({
  handler: function(direction) {
    subtleEaseIn('#faq #accordion .card');
  },
  offset: '80%'
});
$('#payment-online').waypoint({
  handler: function(direction) {
    $('#payment-online').addClass('pulse');
  },
  offset: '70%'
});
// $('#payment-online').waypoint({
//   handler: function(direction) {
//     subtleEaseIn('#payment-online');
//   },
//   offset: '75%'
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
