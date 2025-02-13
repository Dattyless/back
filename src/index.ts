import express from "express";
import cors from 'cors';
import * as db from './db-connection';
import bodyParser from 'body-parser';
const Davidteamo = bodyParser.json();

const app = express();
app.use(cors());

// preguntas - faciles
app.get('/preguntas_faciles', async (req, res) => {
    console.log(`recibido de GET /preguntas_faciles.`);

    try {
        let query = `SELECT * FROM preguntas_faciles`; 
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
app.get('/preguntas_imposibles', async (req, res) => {
    console.log(`recibido de GET /preguntas_imposibles.`);

    try {
        let query = `SELECT * FROM preguntas_imposibles`; 
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

// preguntas - medias
app.get('/preguntas_medias', async (req, res) => {
    console.log(`recibido de GET /preguntas_medias.`);

    try {
        let query = `SELECT * FROM preguntas_medias`; 
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


app.get('/usuarios/:email', async (req, res) => {
    console.log("END POINT /users")

    try{
        let query = `select * from users where email = '${req.params.email}'`
        let db_response = await db.query(query)

        console.log(db_response.rows)

        if(db_response.rows.length > 0){
            console.log('User encontrado: ${db_response.rows}');
            res.json(db_response.rows);
        } else {
            console.log(req.params.email)
            res.json("not found")
        }

    }catch (err){
        console.error(err)
        res.status(500).send("internal error")
    }

});
app.post('/adduser' , Davidteamo , async (req, res) => {
    console.log("end point crear " + req.body)
    try{

        let query = `INSERT INTO users (email, name) VALUES ('${req.body.email}', '${req.body.name}');`
        let db_response = await db.query(query)

        console.log(db_response)

        if(db_response.rowCount == 1){
            res.json("Todo ha salido bien")
        } else{
            res.json("el registro no ha sido creado ")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('internal Server Error')
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
    - GET /preguntas_imposibles
    - GET /preguntas_medias
    - GET /preguntas_faciles
    - POST /usuarios    
    `));