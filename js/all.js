$('document').ready(function(){
  $('.top').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:0},800);
  });
  $('.nav_mobile_menu').click(function(){
    event.preventDefault();
    $('.nav').toggleClass('mobileShow');
  });
});