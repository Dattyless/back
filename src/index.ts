import express from "express";
import cors from 'cors';
import { query } from './db-connection'; // Importa la función query desde db-connection.ts
import bodyParser from 'body-parser';
const Davidteamo = bodyParser.json();

const app = express();
app.use(cors());

// Endpoint para obtener preguntas fáciles
app.get('/preguntas_faciles', async (req, res) => {
    try {
        let queryText = `SELECT * FROM preguntas_faciles`;
        let db_response = await query(queryText);

        if (db_response.rows.length > 0) {
            res.status(200).json(db_response.rows);
        } else {
            res.status(404).json({ error: 'No se encontraron preguntas' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener preguntas' });
    }
});

// Endpoint para obtener preguntas medias
app.get('/preguntas_medias', async (req, res) => {
    try {
        let queryText = `SELECT * FROM preguntas_medias`;
        let db_response = await query(queryText);

        if (db_response.rows.length > 0) {
            res.status(200).json(db_response.rows);
        } else {
            res.status(404).json({ error: 'No se encontraron preguntas' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener preguntas' });
    }
});

// Endpoint para obtener preguntas difíciles
app.get('/preguntas_imposibles', async (req, res) => {
    try {
        let queryText = `SELECT * FROM preguntas_imposibles`;
        let db_response = await query(queryText);

        if (db_response.rows.length > 0) {
            res.status(200).json(db_response.rows);
        } else {
            res.status(404).json({ error: 'No se encontraron preguntas' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener preguntas' });
    }
});

// Endpoint para obtener un usuario por email
app.get('/usuarios/:email', async (req, res) => {
    const email = req.params.email;

    try {
        let queryText = `SELECT * FROM usuarios WHERE email = $1`;
        let db_response = await query(queryText, [email]);

        if (db_response.rows.length > 0) {
            res.status(200).json(db_response.rows[0]); // Devuelve el usuario encontrado
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' }); // Usuario no existe
        }
    } catch (err) {
        console.error('Error en la consulta SQL:', err);
        res.status(500).json({ error: 'Error interno del servidor al obtener el usuario' });
    }
});

// Endpoint para crear un nuevo usuario
app.post('/adduser', Davidteamo, async (req, res) => {
    const { email, name } = req.body;

    try {
        // Verificar si el usuario ya existe
        let checkUserQuery = `SELECT * FROM usuarios WHERE email = $1`;
        let checkUserResponse = await query(checkUserQuery, [email]);

        if (checkUserResponse.rows.length > 0) {
            res.status(400).json({ error: 'El usuario ya existe' });
            return;
        }

        // Crear el nuevo usuario
        let insertUserQuery = `INSERT INTO usuarios (email, name) VALUES ($1, $2)`;
        let insertUserResponse = await query(insertUserQuery, [email, name]);

        if (insertUserResponse.rowCount === 1) {
            res.status(200).json({ message: 'Usuario creado correctamente' });
        } else {
            res.status(400).json({ error: 'El registro no ha sido creado' });
        }
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ error: 'Error interno del servidor al crear el usuario' });
    }
});

// Endpoint para actualizar puntos de un usuario
app.post('/usuarios/:email/puntos', Davidteamo, async (req, res) => {
    const email = req.params.email;
    const { puntos } = req.body;

    try {
        let queryText = "UPDATE usuarios SET puntos = puntos + $1 WHERE email = $2";
        let db_response = await query(queryText, [puntos, email]);

        if (db_response.rowCount === 1) {
            res.status(200).json({ message: 'Puntos actualizados correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar puntos' });
    }
});

// Endpoint para obtener el ranking de usuarios
app.get('/ranking', async (req, res) => {
    try {
        let queryText = `SELECT name, puntos FROM usuarios ORDER BY puntos DESC`;
        let db_response = await query(queryText);

        if (db_response.rows.length > 0) {
            res.status(200).json(db_response.rows);
        } else {
            res.status(404).json({ error: 'No hay usuarios registrados' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener el ranking' });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
    - GET /preguntas_faciles
    - GET /preguntas_imposibles
    - GET /preguntas_medias
    - GET /usuarios/:email
    - POST /adduser
    - POST /usuarios/:email/puntos
    - GET /ranking
    `);
});