$('.seeMore').click(function(){
                     var $this = $(this);
                     $this.toggleClass('seeMore');
                     if($this.hasClass('seeMore')){
                     $this.text('See More');
                     } else {
                     $this.text('See Less');
                    
                     }
                     });