var main = function () {
   /*var inter = setInterval(ranpos, 1000); 

   $.each($('.header span i'), function () {
      $('.header span i').css({
          "left": randomwidth,
          "top": randomheight,
          "color": "white"
      }).animate({
        "top": "50px"
      }, 5000);
   })*/
   $('.header h1').fadeIn(1500).animate({
      "bottom": "-100px"
   }, 1000).css("color", "white");
   setTimeout(function() {
    clearInterval(inter)
   }, 10000);

  $(document).scroll(function () {
  var st = $(this).scrollTop();
     if (st > 155){
            $('.card').addClass("animated");
            $('.card').addClass("fadeInUp");
        }
   
  });
   
   var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
            $('.navbar-nav li a').addClass("animated");
            $('.navbar-nav li a').addClass("fadeOutRight");
            $('.navbar').fadeOut(300);
        }
    else {
          $('.navbar').fadeIn(200);
          $('.navbar-nav li a').removeClass("fadeOutRight");
          $('.navbar-nav li a').addClass("fadeInRight");
    }
   lastScrollTop = st;
}, false);

function ranpos() {
  var height, width, ranheight,ranwidth, header, span, newelement, newsp,  i;
    header = $('.header');
    height = $(window).height();
    width = $(window).width();
    randomheight = Math.floor((Math.random() * height) + 1);
    randomwidth = Math.floor((Math.random() * width) + 1);

      newelement = $('<span><i class="fa fa-bolt fa-4x"</i></span>');
      header.append(newelement);
}

}
$(document).ready(main);