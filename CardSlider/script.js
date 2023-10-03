 
var swiper = new Swiper(".slide-content", {
  
  
  spaceBetween: 10,
  loop: false,
  
  centerSlide: 'true',
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
  },
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      575: {
          slidesPerView: 1,
         
         
          
          
      },
      768: {
          slidesPerView: 2,
          autoplay: {
            delay: 3000, // Cambia el delay para el breakpoint 520px
          },
          
          

      },
      1200: {
          slidesPerView: 3,
          autoplay: {
            delay: 1000,
            pauseOnMouseEnter: true,
          },
      },
  },
});
