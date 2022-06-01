window.onload = function() {
  if ($(window).width() < 700) {
    $('.categories-card h4').addClass('toggle');
   
  }
}

$(document).ready(function(){                
  $(document).on('click', '.toggle',function(){
    $(this).toggleClass("active"); 
    $(this).next('ul').toggleClass("show");
  });
});
