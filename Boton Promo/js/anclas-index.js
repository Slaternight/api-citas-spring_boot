// Función para desplazamiento suave al hacer clic en el enlace del ancla
document.querySelector('a[href="#categorias"]').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
    // Obtiene el elemento a donde se desplazará suavemente
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    // Realiza el desplazamiento suave
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Permite el desplazamiento suave
    });
});

document.querySelector('a[href="#catalogos"]').addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#contacto"]').addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});