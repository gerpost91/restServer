const mongoose = require('mongoose');

let Schema = mongoose.Schema;
// usado para definir un esque , es decir la estructura de un objeto en la bd

let usuario_Schema = new Schema({

    nombre: {
        type: String,
        required: [true, 'nombre es necesario'] // es opcional declarar un mensaje.
        // required: true tambien puede declarse asi sin necesidad del mensaje
    },

    email: {
        type: String,
        required: [true, 'El email es necesario']

    },

    password: {
        type: String,
        required: [true, 'Password es necesario']

    },

   
    img: {
        type: String,
        required: false
    },


    role: {
        type: String,
        default: 'USER_ROLE'
    },

    estado: {
        type: String,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Usuario',usuario_Schema);

/* en este caso se exporta el modelo pero se le cambio el nombre a Usuario, el cual contiene
todas las propiedades de usuario_Schema*/