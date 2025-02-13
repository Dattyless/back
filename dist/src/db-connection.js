"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
// const pool = new Pool({
//   user: 'postgres',
//   password: 'a',
//   host: 'localhost',
//   port: 5432, // default Postgres port
//   database: 'BD_proyecto_final'
// });
var connectionString = 'postgresql://proyecto_final_24_25_rwyr_user:7ccTb7oSW7EJ2Ok8FCsIDnoc3ao4bmpK@dpg-cum64vd6l47c7395bq70-a/proyecto_final_24_25_rwyr';
var pool = new pg_1.Pool({
    connectionString: connectionString,
});
function query(text) {
    return pool.query(text);
}
exports.query = query;
;
