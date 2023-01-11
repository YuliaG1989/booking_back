const express = require('express')
const app = express()
const cors =  require('cors')
const jwt = require('jsonwebtoken')
const  bcrypt  =  require("bcrypt");
const PORT = 5000
const path = require("path");
require('dotenv').config()

app.use( cors());
app.use(express.json());
app.use(express.static('public'))



///----REGISTER &LOGIN

app.use('/', require('./controllers/clientsAuth'))

app.use('/home', require('./controllers/home'))

app.use('/store', require('./controllers/store'))


app.listen(PORT, ()=>{
    console.log(`listening...${PORT}`)
})