require("dotenv").config();
const connectionString = process.env.CONNECTION_STRING;
const pgp = require("pg-promise")();

const db = pgp(connectionString);

module.exports = db;