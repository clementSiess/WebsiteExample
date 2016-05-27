$(document).ready(function() {
                  
                  if($(window).width() >= 768){
                  // do your stuff
                  
                  
                  
                  
                  $(window).scroll(function() {
                                   if ($(document).scrollTop() > 50) {
                                   
                                   //                     $("#brandImageHeader").removeclass('grow');
                                   
                                   $('nav').addClass('shrink');
                                   //                 $('brandImageHeader').addClass('change');
                                   timeout = setTimeout(function(){
                                                        $("#brandImageHeader").css("-webkit-transition", "all 2s ease-in-out");
                                                        
                                                        
                                                        shrinkLogo();
                                                        }, 500);
                                   } else {
                                   
                                   $('nav').removeClass('shrink');
                                   //                     unshrinkLogo();
                                   grow();
                                   //                     $('brandImageHeader').removeClass('change');
                                   
                                   }
                                   });
                  }
                  
                  function shrinkLogo(){$("#brandImageHeader").addClass('shrinkLogo')};
                  function unshrinkLogo(){$("#brandImageHeader").removeClass('shrinkLogo')};
                  
                  function grow(){$("#brandImageHeader").addClass('grow')};
                  
                  
                  //                  function shrinkLogo(){$("#brandImageHeader").stop().animate({"width": "145px", "height": "60px"}, 300)};
                  //                  function unshrinkLogo(){$("#brandImageHeader").stop().animate({"width": "205px", "height": "92px"}, 300)};
                  
                  });