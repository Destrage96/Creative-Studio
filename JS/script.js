$( 'window' ).ready( function (ev) {
  autoSlider ();
  var left = 0;
  var timer;
  var pic = $( '.pic .link_pic' );

  function autoSlider () {
    timer = setTimeout( function () {
      left = left - 248;

      if( left < -992 ) {
        left = 0;
        clearTimeout( timer );
      }

      $( '.pic' ).css( {left: left +'px'} );
      autoSlider();
    }, 2000);
  }
  
});