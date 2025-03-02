import { Pool } from 'pg';

// Cadena de conexión proporcionada
const connectionString = 'postgresql://proyecto_final_24_25_rwyr_user:7ccTb7oSW7EJ2Ok8FCsIDnoc3ao4bmpK@dpg-cum64vd6l47c7395bq70-a.oregon-postgres.render.com/proyecto_final_24_25_rwyr';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Esto desactiva la verificación estricta del certificado SSL.
  },
});

export function query(text: string, params?: any[]) {
  return pool.query(text, params);
}