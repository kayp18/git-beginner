$(window).scroll(function(e) {


  var wScroll = $(this).scrollTop();
  
  if(wScroll>2400){
    wScroll=2400;
  }
  
  var buyutme=(wScroll/2000)+1;
  var hi=(wScroll/6000)+1;
  var bg=(wScroll/5000)+1;

  $('#kayp img').css('transform', 'scale('+buyutme+')');
  $('#hi img').css('transform', 'scale('+hi+')');
  $('#hi img').css({'transform' : 'translate(0px, -'+ wScroll /2 +'%)'});
   $('#intro').css({'transform' : 'translate(0px, '+ wScroll /12 +'%)'});
  $('.bg').css('transform', 'scale('+bg+')');

  
    if(wScroll > $('.profile').offset().top - ($(window).height() / 1.2)) {}
	
});

$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 