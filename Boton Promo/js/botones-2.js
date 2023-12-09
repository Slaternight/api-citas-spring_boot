document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al Swiper
    const mySwiper = new Swiper('.swiper-container-2', {
      // Configuración de Swiper
    });
 
    // Obtén una referencia a los botones de colores
    const colorButtons = document.querySelectorAll('.color-button');
 
    // Agrega un controlador de eventos para cada botón de color
    colorButtons.forEach((button, index) => {
     button.addEventListener('click', function () {
        // Detén el Swiper
       mySwiper.autoplay.stop();
 
       // Obtén el color asociado al botón
        const color = this.getAttribute('data-color');
 
        // Cambia la carpeta de imágenes basada en el color seleccionado
        mySwiper.removeAllSlides(); // Elimina todas las diapositivas actuales
       mySwiper.update(); // Actualiza el Swiper
 
        // Agrega nuevas diapositivas basadas en el color seleccionado
        for (let i = 1; i <= 2; i++) {
          // Cambia la ruta de la imagen según el color y el número de la diapositiva
          const imagePath = `/assets/${color}/${color}-${i}.png`;
 
          // Agrega la diapositiva al Swiper
          mySwiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color}-${i}"></div>`);
        }
 
        // Reinicia el Swiper después de cambiar las imágenes
        mySwiper.autoplay.start();
 
        // Quita la clase 'selected' de todos los botones de color
       colorButtons.forEach(btn => btn.classList.remove('selected'));
        // Agrega la clase 'selected' al botón de color actual
        this.classList.add('selected');
      });
 
      // Selecciona automáticamente el primer botón de color al cargar la página
      if (index === 0) {
        button.click();
      }
    });
  });