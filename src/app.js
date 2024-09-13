const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/checkpoint');

//registrar a Model
require('./models/product');


// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



const indexRouter = require('./routes/index')
app.use('/', indexRouter)


//ROTA PARA O TICKET
const productRouter = require('./routes/product-route')
app.use('/product', productRouter)


module.exports = app;