const Client = require('pg').Client
// require('dotenv').config()
const dbConfig = {
	connectionString: process.env.HEROKU_POSTGRESQL_GOLD_URL,
	ssl : { rejectUnauthorized: false }
}


	




const client = new Client(dbConfig)


module.exports = client;
