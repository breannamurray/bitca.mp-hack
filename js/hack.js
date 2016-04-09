var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.menu').click(function() {
  	$('.menu').toggleClass('menu-close');
  	$('.fa-bars').toggleClass("fa-times");

    $('.nav-list').animate({
      right: "0px"
    }, 500);

    $('body').animate({
      right: "285px"
    }, 500);
  });

  /* Then push them back */
  $('.menu-close').click(function() {
  	$('.menu-close').toggleClass('menu');
  	$('.fa-times').toggleClass("fa-bars");
    $('.nav-list').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
  
  $(document).scroll(function () { 
      var y = $(this).scrollTop();        
      if (y > 100) {
          $('.navi').css({"background-color":"white", "color":"#333"});
          $('.menu-close').css("color", "white");
      }
      else {
          $('.navi').css({"background-color":"transparent", "color":"white"}); 
      }
      if (y > 600 && y < 2700) {
        $('.top').fadeIn('slow');
      }
      else {
        $('.top').fadeOut('slow');
      }
  });

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > 500){
      if (st > lastScrollTop){
         $('.navi').css("opacity", "0");
        
     } else {
        $('.navi').css("opacity", "1");
     }
  }
   lastScrollTop = st;
}, false);
};

$(document).ready(main);