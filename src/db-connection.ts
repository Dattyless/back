import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   password: 'a',
//   host: 'localhost',
//   port: 5432, // default Postgres port
//   database: 'BD_proyecto_final'
// });

const connectionString = 'postgresql://proyecto_final_24_25_rwyr_user:7ccTb7oSW7EJ2Ok8FCsIDnoc3ao4bmpK@dpg-cum64vd6l47c7395bq70-a.oregon-postgres.render.com/proyecto_final_24_25_rwyr';

const pool = new Pool({
  connectionString,
});

export function query(text: any): any {
    return pool.query(text);
};