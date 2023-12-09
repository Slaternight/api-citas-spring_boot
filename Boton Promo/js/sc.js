function cargarHeaderDePagina() {
    fetch('../html/sc.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('.sc');
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el menu: ', error));
}

window.addEventListener('load', cargarHeaderDePagina);