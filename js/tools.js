
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// animations fadin/out for snippet and nav-bar
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600 && y < 1200) {
    $('.appeardiv1').fadeIn(800);
  } else {
    $('.appeardiv1').fadeOut(800);
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800 && y < 1400) {
    $('.appeardiv2').fadeIn(800);
  } else {
    $('.appeardiv2').fadeOut(800);
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.nav').fadeIn(800);
  } else {
    $('.nav').fadeOut(800);
  }
});