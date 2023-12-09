// Obtén todas las imágenes y puntos
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Agrega un manejador de eventos a cada punto
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Quita la clase 'active' de todas las imágenes y puntos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Agrega la clase 'active' a la imagen y el punto seleccionados
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  });
});
