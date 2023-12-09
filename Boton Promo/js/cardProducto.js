import productos from 'productos.json';

document.addEventListener("DOMContentLoaded", function() {

const listaProductos = document.getElementById("listaProductos");
const tarjetaPlantilla = document.querySelector(".producto-tarjeta");
productos.forEach(producto => {
    const tarjeta = tarjetaPlantilla.cloneNode(true);
    tarjeta.querySelector(".producto-imagen").src = producto.imagen;
    tarjeta.querySelector(".producto-nombre").textContent = producto.nombre;
    tarjeta.querySelector(".producto-precio").textContent = `$${producto.precio}`;
    listaProductos.appendChild(tarjeta);
});

 tarjetaPlantilla.remove();
});
