// // Obtén una referencia a los botones de colores
// const colorButtons = document.querySelectorAll('.color-button');

// // Obtén una referencia a la imagen principal
// const mainImage = document.querySelector('.swiper-slide img');

// // Agrega un controlador de eventos para cada botón de color
// colorButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     // Obtén el color asociado al botón
//     const color = this.getAttribute('data-color');

//     // Cambia la imagen principal basada en el color seleccionado
//     if (color === 'azul') {
//       mainImage.src = '/assets/c1.png'
//       mainImage.src = '/assets/c2.png';
//     } else if (color === 'rojo') {
//       mainImage.src = '/assets/c3.png'
//       mainImage.src = '/assets/c4.png';
//     } else if (color === 'verde') {
//       mainImage.src = '/assets/c5.png'
//       mainImage.src = '/assets/c6.png';
//     }
    
//   });
// });

// ---------------------- Este es el codigo normal

// // Obtén una referencia al Swiper
// const mySwiper = new Swiper('.swiper-container', {
//   // Configuración de Swiper
// });

// // Obtén una referencia a los botones de colores
// const colorButtons = document.querySelectorAll('.color-button');

// // Agrega un controlador de eventos para cada botón de color
// colorButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     // Detén el Swiper
//     mySwiper.autoplay.stop();

//     // Obtén el color asociado al botón
//     const color = this.getAttribute('data-color');

//     // Cambia la carpeta de imágenes basada en el color seleccionado
//     mySwiper.removeAllSlides(); // Elimina todas las diapositivas actuales
//     mySwiper.update(); // Actualiza el Swiper

//     // Agrega nuevas diapositivas basadas en el color seleccionado
//     for (let i = 1; i <= 2; i++) {
//       // Cambia la ruta de la imagen según el color y el número de la diapositiva
//       const imagePath = `/assets/${color}/${color}-${i}.png`;

//       // Agrega la diapositiva al Swiper
//       mySwiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color} ${i}"></div>`);
//     }

//     // Reinicia el Swiper después de cambiar las imágenes
//     mySwiper.autoplay.start();
//   });
// });

// ---------------------- Este es el codigo donde se cargan las imagenes del primer color con el === 0 pero le puse el === 3 o < 3 para que cargue todas las imagenes

document.addEventListener('DOMContentLoaded', function () {
   // Obtén una referencia al Swiper
   const mySwiper = new Swiper('.swiper-container', {
     // Configuración de Swiper
   });

   // Obtén una referencia a los botones de colores
   const colorButtons = document.querySelectorAll('.color-button');
   mySwiper.autoplay.stop();
   // Agrega un controlador de eventos para cada botón de color
   colorButtons.forEach((button, index) => {
    button.addEventListener('click', function () {

      // e.stopPropagation(button); // Evita que el evento se propague

     // e.preventDefault(); // Evitar la acción predeterminada del botón

     // event.preventDefault(); // Evita el comportamiento predeterminado del botón

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
         const imagePath = `/assets/${color}/${color}-${i}.jpeg`;

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

// ---------------------- Este es el codigo que parece que hace lo mismo

// document.addEventListener('DOMContentLoaded', function () {
//   // Obtén una referencia al Swiper
//   const mySwiper = new Swiper('.swiper-container', {
//     // Configuración de Swiper
//   });

//   // Obtén una referencia a los botones de colores
//   const colorButtons = document.querySelectorAll('.color-button');

//   // Función para cargar imágenes basadas en el color
//   function loadImages(color) {
//     mySwiper.removeAllSlides(); // Elimina todas las diapositivas actuales
//     mySwiper.update(); // Actualiza el Swiper

//     // Agrega nuevas diapositivas basadas en el color seleccionado
//     for (let i = 1; i <= 2; i++) {
//       // Cambia la ruta de la imagen según el color y el número de la diapositiva
//       const imagePath = `/assets/${color}/${color}-${i}.png`;

//       // Agrega la diapositiva al Swiper
//       mySwiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color} ${i}"></div>`);
//     }

//     // Reinicia el Swiper después de cambiar las imágenes
//     mySwiper.autoplay.start();
//   }

//   // Agrega un controlador de eventos para cada botón de color
//   colorButtons.forEach((button, index) => {
//     button.addEventListener('click', function () {
//       // Detén el Swiper
//       mySwiper.autoplay.stop();

//       // Obtén el color asociado al botón
//       const color = this.getAttribute('data-color');

//       // Carga las imágenes basadas en el color seleccionado
//       loadImages(color);

//       // Quita la clase 'selected' de todos los botones de color
//       colorButtons.forEach(btn => btn.classList.remove('selected'));

//       // Agrega la clase 'selected' al botón de color actual
//       this.classList.add('selected');
//     });

//     // Selecciona automáticamente el primer botón de color al cargar la página
//     if (index === 0) {
//       button.click();
//     }
//   });
// });

// ---------------------- Este es el codigo que elimina todas las imagenes

// document.addEventListener('DOMContentLoaded', function () {
//   // Obtén una referencia al Swiper
//   const mySwiper = new Swiper('.swiper-container', {
//     // Configuración de Swiper
//   });

//   // Obtén una referencia a los botones de colores
//   const colorButtons = document.querySelectorAll('.color-button');

//   // Función para cargar todas las imágenes
//   function loadAllImages() {
//     mySwiper.removeAllSlides(); // Elimina todas las diapositivas actuales
//     mySwiper.update(); // Actualiza el Swiper

//     // Agrega todas las diapositivas de todos los colores
//     const colors = ['azul', 'rojo', 'verde']; // Agrega aquí más colores si es necesario
//     for (const color of colors) {
//       for (let i = 1; i <= 2; i++) {
//         // Cambia la ruta de la imagen según el color y el número de la diapositiva
//         const imagePath = `/assets/${color}/${color}-${i}.png`;

//         // Agrega la diapositiva al Swiper
//         mySwiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color} ${i}"></div>`);
//       }
//     }

//     // Reinicia el Swiper después de cambiar las imágenes
//     mySwiper.autoplay.start();
//   }

//   // Carga todas las imágenes al cargar la página
//   loadAllImages();

//   // Agrega un controlador de eventos para cada botón de color
//   colorButtons.forEach((button, index) => {
//     button.addEventListener('click', function () {
//       // Detén el Swiper
//       mySwiper.autoplay.stop();

//       // Obtén el color asociado al botón
//       const color = this.getAttribute('data-color');

//       // Limpia el Swiper antes de cargar las imágenes
//       mySwiper.removeAllSlides();
//       mySwiper.update();

//       // Carga las imágenes basadas en el color seleccionado
//       loadImages(color);

//       // Quita la clase 'selected' de todos los botones de color
//       colorButtons.forEach(btn => btn.classList.remove('selected'));

//       // Agrega la clase 'selected' al botón de color actual
//       this.classList.add('selected');
//     });

//     // Selecciona automáticamente el primer botón de color al cargar la página
//     if (index === 0) {
//       button.click();
//     }
//   });
// });


// ---------------------- Este es el codigo que se jode, no todo pero se jode el slide

// document.addEventListener('DOMContentLoaded', function () {
  
//   const mySwiper = new Swiper('.swiper-container', {

//   });

//   const colorButtons = document.querySelectorAll('.color-button');


//   function loadImages(color) {
//     mySwiper.removeAllSlides();
    

//     for (let i = 1; i <= 2; i++) {

//       const imagePath = `/assets/${color}/${color}-${i}.png`;

//       mySwiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color}-${i}"></div>`);
//     }

//     mySwiper.autoplay.start();  
//   }

//   colorButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       mySwiper.autoplay.start();

//       const color = this.getAttribute('data-color');

//       mySwiper.removeAllSlides();


//       loadImages(color);
//     });
//   });
// });


/*
// Obtén una referencia a todos los botones de color
const colorButtons = document.querySelectorAll('.color-button');

// Agrega un controlador de eventos para cada botón de color
colorButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Detén el Swiper específico de esta tarjeta
        const cardSwiper = this.closest('.card').querySelector('.card-swiper.swiper-container');
        cardSwiper.swiper.autoplay.stop();

        // Obtén el color asociado al botón
        const color = this.getAttribute('data-color');

        // Elimina todas las diapositivas actuales del Swiper
        cardSwiper.swiper.removeAllSlides();

        // Agrega nuevas diapositivas basadas en el color seleccionado
        for (let i = 1; i <= 2; i++) {
            // Cambia la ruta de la imagen según el color y el número de la diapositiva
            const imagePath = `/assets/${color}/${color}-${i}.png`;

            // Agrega la diapositiva al Swiper
            cardSwiper.swiper.appendSlide(`<div class="swiper-slide"><img src="${imagePath}" alt="${color} ${i}"></div>`);
        }

        // Reinicia el Swiper después de cambiar las imágenes
        cardSwiper.swiper.autoplay.start();
    });
});

// Inicializa Swiper para cada tarjeta de producto
const cardSwipers = document.querySelectorAll('.card-swiper');
cardSwipers.forEach(cardSwiper => {
    new Swiper(cardSwiper, {
        // Configuración de Swiper
    });
});
*/