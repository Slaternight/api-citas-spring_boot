import * as mysql from 'mysql2';

const dbConfig = {
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Realiza operaciones de base de datos, como consultas o inserciones, aquí

// Cuando hayas terminado de trabajar con la base de datos, cierra la conexión
connection.end();
