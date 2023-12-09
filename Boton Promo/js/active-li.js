// $(document).ready(function() {
//     $('.li li a').click(function() {
//         // Remover la clase 'activo' de todos los elementos li
//         $('.li li').removeClass('activo');

//         // Agregar la clase 'activo' al elemento li seleccionado
//         $(this).parent('li').addClass('activo');
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const current = document.querySelector(".activo");
            current.classList.remove("activo");
            this.parentNode.classList.add("activo");
        });
    });
});



  