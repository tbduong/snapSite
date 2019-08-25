$( document ).ready(function() {

  //Change nav font color on bg color change
  $('.moduleGroup').scroll(function (e) {
    e.preventDefault();
      var pos = $('.moduleGroup').prop('scrollTop');
      console.log(pos);

      if  (pos >= 200) {
         $('.scrolldown-arrow').hide();
       } else {
         $('.scrolldown-arrow').show();
       }
  });

  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    speed: 600,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    //override default text render for arrows
    prevArrow: '<a class="slick-prev "></a>',
		nextArrow: '<a class="slick-next "></a>'
    });


});
