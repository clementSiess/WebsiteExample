$(document).ready(function() {
                  
                  if($(window).width() >= 768){                  
                  
                  
                  
    $(window).scroll(function() {
                 if ($(document).scrollTop() > 50) {
                 $('nav').addClass('shrink');
                     ungrow();
                     shrinkLogo();
                 } else {
                 $('nav').removeClass('shrink');
                     unshrinkLogo();
                     grow();

                 }
    });
                  } else {
                  $('nav').addClass('shrink');

                  ungrow();
                  shrinkLogo();
                  }
                  

                  function shrinkLogo(){$("#brandImageHeader").addClass('shrinkLogo')};
                  function unshrinkLogo(){$("#brandImageHeader").removeClass('shrinkLogo')};
                  
                  function grow(){$("#brandImageHeader").addClass('grow')};
                  function ungrow(){$("#brandImageHeader").removeClass('grow')};


});

