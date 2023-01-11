const{Pool, Client}  = require('pg')
require('dotenv').config()


const dbConfig = {
	connectionString: 'postgresql://localhost:5432/clients',
}

if(process.env.HEROKU_POSTGRESQL_GOLD_URL){
	dbConfig.ssl = { rejectUnauthorized: false }
	dbConfig.connectionString = 'postgres://neigafaikehsyn:39318d3b33e716454d167ffa61047c732ae549b4c973324a29c13adcb5819134@ec2-44-199-143-43.compute-1.amazonaws.com:5432/d802dltkbkr8pv'
}

const client = new Client(dbConfig)


module.exports = client;
