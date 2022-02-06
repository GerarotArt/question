const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'bizcuit',
  password: 'example',
  port: 5432,
});

module.exports = pool;
