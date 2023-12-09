let botones = document.querySelectorAll('button'); // Selecciona todos los botones

function mostrarCatalogo(numero) {
  // Oculta todos los catálogos
  let catalogos = document.querySelectorAll('.catalogo');
  catalogos.forEach(function(catalogo) {
    catalogo.style.display = 'none';
  });

  // Muestra el catálogo seleccionado
  let catalogoMostrado = document.getElementById('catalogo' + numero);
  if (catalogoMostrado) {
    catalogoMostrado.style.display = 'block';
  }

  // Oculta el botón seleccionado actualmente
  let botonSeleccionado = document.querySelector('.seleccionado');
  if (botonSeleccionado) {
    botonSeleccionado.classList.remove('seleccionado');
  }
  
  // Muestra el nuevo botón seleccionado
  botones[numero - 1].classList.add('seleccionado');
}