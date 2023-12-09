function cargarHeaderDePagina() {
    fetch('../html/newsletter.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('.newsletter');
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el menu: ', error));
}

window.addEventListener('load', cargarHeaderDePagina);