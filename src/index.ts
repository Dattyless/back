import express from "express";
import cors from 'cors';
import * as db from './db-connection';
import bodyParser from 'body-parser';
const Davidteamo = bodyParser.json();

const app = express();
app.use(cors());

// preguntas - medio
app.get('/preguntas', async (req, res) => {
    console.log(`recibido de GET /preguntas.`);

    try {
        let query = `SELECT * FROM preguntas`; 
        let db_response = await db.query(query);

        if (db_response.rows.length > 0) {
            console.log('Preguntas obtenidas:', db_response.rows);
            res.json(db_response.rows); 
        } else {
            console.log('No se encontraron preguntas');
            res.json([]);  
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// preguntas - dificil
app.get('/preguntas_dificiles', async (req, res) => {
    console.log(`recibido de GET /preguntas_dificiles.`);

    try {
        let query = `SELECT * FROM preguntas_dificiles`; 
        let db_response = await db.query(query);

        if (db_response.rows.length > 0) {
            console.log('Preguntas obtenidas:', db_response.rows);
            res.json(db_response.rows); 
        } else {
            console.log('No se encontraron preguntas');
            res.json([]);  
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// preguntas - intermedias
app.get('/preguntas_intermedias', async (req, res) => {
    console.log(`recibido de GET /preguntas_intermedias.`);

    try {
        let query = `SELECT * FROM preguntas_intermedias`; 
        let db_response = await db.query(query);

        if (db_response.rows.length > 0) {
            console.log('Preguntas obtenidas:', db_response.rows);
            res.json(db_response.rows); 
        } else {
            console.log('No se encontraron preguntas');
            res.json([]);  
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


// crear usuario
app.post("/usuarios",  Davidteamo, async (req, res) => {
    console.log(req.body); 
    try {
        console.log("Comprobando usuario");
                let comprobacion = await db.query(
            `SELECT * FROM usuarios WHERE id = '${req.body.id}'`
        );
        console.log("Usuario comprobado");

        if (comprobacion.rows.length < 1) {
            await db.query(
                `INSERT INTO usuarios (id, nombre) VALUES ('${req.body.id}', '${req.body.nombre}')`
            );
            comprobacion = await db.query(
                `SELECT * FROM usuarios WHERE id = '${req.body.id}'`
            );
            console.log("Usuario creado");
        } 
        res.json(comprobacion.rows[0]);
    } catch (err) {
        console.error(err); 
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
    - GET /preguntas_dificiles
    - GET /preguntas
    - POST /user
    `));