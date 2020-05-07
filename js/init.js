(function($){
  $(function(){

    $('.sidenav').sidenav()

.on('click tap', 'li a', () => {

$('.sidenav').sidenav('close');

});
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
