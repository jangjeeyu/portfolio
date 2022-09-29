$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        slidesToShow: 3,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:1000
       /*responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]*/
      });
})