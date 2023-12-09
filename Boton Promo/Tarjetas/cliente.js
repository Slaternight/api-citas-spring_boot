document.getElementById('formularioTarjeta').addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const fechaCaducidad = document.getElementById('fechaCaducidad').value;
    const cvv = document.getElementById('cvv').value;

    // Enviar los datos al servidor Node.js para guardarlos en la base de datos
    fetch('/guardarTarjeta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeroTarjeta, fechaCaducidad, cvv })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error al guardar la tarjeta:', error);
    });
});
