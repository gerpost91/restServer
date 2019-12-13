//config 
require('./config/config');
/*=========
=requieres 
===========*/
// base de datos
mongoose = require('mongoose');
//express server
const express = require('express')
const app = express()
// *****bodyParser* *****/´
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// ojo el body parser complementa express, antes eran el mismo paquete pqeo se separaron

// importeng routes from usuario
app.use(require('./routes/usuario'))


// conecting to  mongodb
mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });


// simple status alert
app.listen(process.env.PORT, () => {
    console.log(`Working on port ${process.env.PORT}`);
}
)