const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Endpoint para procesar pagos
app.post('/procesar-pago', (req, res) => {
  // Aquí puedes implementar la lógica para procesar el pago utilizando el número de cuenta bancaria
  const numeroCuenta = req.body.numeroCuenta;

  // En este ejemplo, simplemente responderemos con un mensaje de éxito
  const respuesta = {
    mensaje: 'Pago procesado con éxito para la cuenta: ' + numeroCuenta,
  };

  res.json(respuesta);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});