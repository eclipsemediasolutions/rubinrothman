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
var isIE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var ieVersion = /*@cc_on (function() {switch(@_jscript_version) {case 1.0: return 3; case 3.0: return 4; case 5.0: return 5; case 5.1: return 5; case 5.5: return 5.5; case 5.6: return 6; case 5.7: return 7; case 5.8: return 8; case 9: return 9; case 10: return 10;}})() || @*/ 0;

var isIE = !!window.ActiveXObject;
if (isIE) {
  $('body').addClass('ie10');
}
if (isIE11) {
  $('body').addClass('ie11');
}




