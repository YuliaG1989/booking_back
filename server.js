const express = require('express')
const app = express()
const cors =  require('cors')
const jwt = require('jsonwebtoken')
const  bcrypt  =  require("bcrypt");
const PORT = process.env.PORT || 5000
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static('public'))


///----REGISTER &LOGIN

app.use('/', require('./controllers/clientsAuth'))

app.use('/home', require('./controllers/home'))

app.use('/store', require('./controllers/store'))

if (process.env.NODE_ENV === "production") {
  
    app.use(express.static(path.join(__dirname, "public")));
  }
  
  console.log(__dirname);
  console.log(path.join(__dirname, "public"));


app.listen(PORT, ()=>{
    console.log('listening...')
})