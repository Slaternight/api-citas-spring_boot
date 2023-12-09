// server.ts
import express from 'express';
import bodyParser from 'body-parser';
import pacientesRoutes from './src/routes/pacientes'; // Importa tus rutas

const app = express();
const port = 3000; // Puedes usar otro puerto si lo deseas

app.use(bodyParser.json());
app.use('/pacientes', pacientesRoutes); // Usa tus rutas

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});