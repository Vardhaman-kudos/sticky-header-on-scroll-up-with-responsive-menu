$(function () {

  var $window = $(window);
  var lastScrollTop = 0;
  var $header = $('.site-header');
  var headerHeight = $header.outerHeight();

  $window.scroll(function () {

    var windowTop = $window.scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass('site-header-sticky');
    } else {
      $header.removeClass('site-header-sticky');
      $header.removeClass('site-header-show');
    }

    if ($header.hasClass('site-header-sticky')) {
      if (windowTop < lastScrollTop) {
        $header.addClass('site-header-show');
      } else {
        $header.removeClass('site-header-show');
      }
    }
    $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);

    lastScrollTop = windowTop;

    $('#windowtop').text('scrollTop: ' + windowTop);
  });
});