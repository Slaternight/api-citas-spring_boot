function cargarPieDePagina() {
    fetch('../html/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.querySelector('footer');
            footerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el pie de página:', error));
}

window.addEventListener('load', cargarPieDePagina);