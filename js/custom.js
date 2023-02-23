$(function(){
    $('.slide_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });

     $(window).scroll(function(){
        var scrolling=$(this).scrollTop()
        if (scrolling >20) {
            $(".back_to_top").fadeIn()
        }else{$(".back_to_top").fadeOut()}
     })
     $(window).scroll(function(){
        var scrolling=$(this).scrollTop()
        if (scrolling >20) {
            $(".nav_menu").addClass("bg")
        }else{$(".nav_menu").removeClass("bg")}
     })


      $(".back_to_top").click(function(){
        $("html,body").animate({
            scrollTop:0,
        })
      })
     

      $(window).on("load",function(){
        $(".preload").delay(10).fadeOut(300)
      })





})