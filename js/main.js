$( document ).ready(function() {

  //Change nav font color on bg color change
  // $('.moduleGroup').scroll(function (e) {
  //   e.preventDefault();
  //     var pos = $('.moduleGroup').prop('scrollTop');
  //     console.log(pos);
  //
  //     if  (pos >= 1900) {
  //        $(".nav-right a, .navbar-brand").addClass('transition-nav');
  //      } else {
  //        $(".nav-right a, .navbar-brand").removeClass('transition-nav');
  //      }
  // });

  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    /* Just changed this to get the bottom dots navigation */
    infinite: true,
    speed: 500,
    arrows: true
    });





});
