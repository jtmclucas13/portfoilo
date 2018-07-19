$(document).ready(function() {
  var stickPoint = $("#portfolioNav").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > stickPoint) {
      $('.portfolio-header').addClass('sticky');
    }
    if ($(window).scrollTop() < stickPoint) {
      $('.portfolio-header').removeClass('sticky');
    }
  });

  $('#portfolioNav').find('a').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var $anchor = $(target).offset();
    var anchorHeight = $(target).outerHeight();
    var calcScroll;
    if ( $('body').scrollTop < stickPoint ){
      calcScroll = $anchor.top - anchorHeight;
    }
    else{
      calcScroll = $anchor.top - anchorHeight - $('#portfolioNav').outerHeight();
    }
    $('body').stop().animate({
        scrollTop: calcScroll 
    }, 1500);
  });
});