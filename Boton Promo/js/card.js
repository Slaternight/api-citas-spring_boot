document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.swiper-container', {
   
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

  
  // Mostrar las flechas al pasar el cursor sobre el carrusel
  var swiperContainer = document.querySelector('.swiper-container');
  
  swiperContainer.addEventListener('mouseenter', function() {
    mySwiper.navigation.update();
  });
  
  swiperContainer.addEventListener('mouseleave', function() {
    mySwiper.navigation.update();
  });
