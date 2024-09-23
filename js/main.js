$(document).ready(function(){

  $(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});
  
  $(".wrap .menubtn button").on("click", function() {
    $("nav").css("left", "0");
  });
  $("nav .navheader .close").on("click", function() {
    $("nav").css("left", "-100%");
  });

  $(".gnb .menu").on("click", function() {
    $(this).find(".submenu").stop().slideToggle();
    $(this).siblings().find(".submenu").stop().slideUp();
  }); 
  
  var swiper = new Swiper(".mainSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay : true,
        loop:true,	
        breakpoints: {
          1200: {
            slidesPerView:5,
            spaceBetween: 30,
            autoplay : false,
            loop: false, 
            freeMode: true,
            watchSlidesProgress: true,
          },
        },
      });
      var swiper1 = new Swiper(".mainSwiper1", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".direction .next",
          prevEl: ".direction .prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      var swiper = new Swiper(".btnSwiper", {
        slidesPerView: 3.5,
        spaceBetween: 12,
        breakpoints: {
            1200: {
              slidesPerView:6,
              spaceBetween: 12,
          },
        },
      });

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });

      var swiper = new Swiper(".secSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
        breakpoints: {
          1200: {
            slidesPerView:4,
            spaceBetween: 20,
         },
        },
      });

      $(".btnSwiper .swiper-slide").on("click", function() {
        const i = $(this).index();
        $(".box .wrap").css("display", "none");
        $(".box .wrap").eq(i).css("display", "flex");
    });
      $(".box .wrap").hide();
      $(".box .wrap").first().show();

      var swiper = new Swiper(".reviewSwiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
                noSwiping: true,
                allowTouchMove: false,
            },
        },
    });

   $(".sec1 .wrap .btn button").on("click", function() {
     const i = $(this).index();
     $(".sec1 .wrap .secSwiper").css("display", "none");
     $(".sec1 .wrap .secSwiper").eq(i).css("display", "flex");
 });
   $(".sec1 .wrap .secSwiper").hide();
   $(".sec1 .wrap .secSwiper").first().show();

      $(".tab .btn button").on("click", function(){
         const i  = $(this).index();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $(".tab .con > div").eq(i).addClass("on");
        $(".tab .con > div").eq(i).siblings().removeClass("on");
    });
});