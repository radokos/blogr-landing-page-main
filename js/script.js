(function($) {
var hamburger = $('header nav li:nth-child(1)'),
     width = $(document).width();          

     hamburger.on('click', function(){
         if( width < 639) 
                    { $(this).nextAll().toggle();}
     });

})(jQuery);