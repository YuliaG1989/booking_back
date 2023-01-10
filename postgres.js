const Client = require('pg').Client
require('dotenv').config()
const dbConfig =  process.env.HEROKU_POSTGRESQL_GOLD_URL



const client = new Client(dbConfig)


module.exports = client;
