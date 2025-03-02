"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
var connectionString = 'postgresql://proyecto_final_24_25_rwyr_user:7ccTb7oSW7EJ2Ok8FCsIDnoc3ao4bmpK@dpg-cum64vd6l47c7395bq70-a.oregon-postgres.render.com/proyecto_final_24_25_rwyr';
var pool = new pg_1.Pool({
    connectionString: connectionString,
});
function query(text, params) {
    return pool.query(text, params);
}
exports.query = query;
