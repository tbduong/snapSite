$( document ).ready(function() {



  $('.moduleGroup').scroll(function (e) {
    e.preventDefault();
      var pos = $('.moduleGroup').prop('scrollTop');
      console.log(pos);

      if (pos > 1184) {
         $(".nav-right a, .navbar-brand").addClass('transition-nav');
       } else {
         $(".nav-right a, .navbar-brand").removeClass('transition-nav');
       }


  });





});
