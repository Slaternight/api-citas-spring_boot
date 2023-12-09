function cargarHeaderDePagina() {
    fetch('../html/header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('.menu');
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el menu: ', error));
}

window.addEventListener('load', cargarHeaderDePagina);