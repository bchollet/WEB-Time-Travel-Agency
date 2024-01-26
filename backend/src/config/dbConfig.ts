const pgp = require('pg-promise')()
export const db = pgp('postgresql://postgres:postgres@localhost:5432/postgres');
