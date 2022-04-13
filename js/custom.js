$(function(){
    // Banner  Silder
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '5px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '5px',
              slidesToShow:1
            }
          }
        ]
        
      });


    // mixit Up
    var mixer = mixitup('.stisker_item');

    // back to top
    var btn = $('.backtotop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});