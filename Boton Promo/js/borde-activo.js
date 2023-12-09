document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remueve la clase activa de todos los botones
            colorButtons.forEach(btn => btn.classList.remove('active-color-button'));

            // Agrega la clase activa solo al botón seleccionado
            this.classList.add('active-color-button');

            // Aquí puedes realizar otras acciones, como cambiar las imágenes
            // según el color seleccionado
        });
    });
});
