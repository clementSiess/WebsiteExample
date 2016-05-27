$(document).ready(function(){
                  
                  var offsetValue = 40;
                  var body = document.getElementById("page-top");

                  $(body).data().scrollspy.options.offset = offsetValue;
                  // force scrollspy to recalculate the offsets to your targets
                  $(body).data().scrollspy.process();
    
                  });