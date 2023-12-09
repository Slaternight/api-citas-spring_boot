function cargarPerfil() {
    fetch('../html/p2.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector('.profile-wishes');
            headerContainer.innerHTML = data;
            console.log("Se cargo exitosamente la parte del perfil");
        })
        .catch(error => console.error('Error al cargar el menu: ', error));
}

window.addEventListener('load', cargarPerfil);