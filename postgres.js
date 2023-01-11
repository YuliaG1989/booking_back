const Client = require('pg').Client
require('dotenv').config()
const dbConfig = {
	connectionString: 'postgresql://localhost:5000/clients',
}

if(process.env.HEROKU_POSTGRESQL_GOLD_URL){
	dbConfig.ssl = { rejectUnauthorized: false }
	dbConfig.connectionString = process.env.HEROKU_POSTGRESQL_GOLD_URL

}

const client = new Client(dbConfig)


module.exports = client;
