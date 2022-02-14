import express from 'express';

import cors from 'cors';

//importamos la conexión a la BD
import db from './database/db.js';

//importamos nuestro enrutador
import blogRoutes from './routes/routes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
    db.authenticate();
    console.log('Conexión a la base de datos establecida');
} catch (error) {
    console.log('Error al conectar a la base de datos: ' + error);
}

app.get('/', (req, res) => {
    res.send('Hola mundo desde express');
});

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/');
}); 