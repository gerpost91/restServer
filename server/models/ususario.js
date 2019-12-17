const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-validator')
/*mongoose-validator' es usado en el correo para que este sea unico y 
evitar insercion duplicada*/

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
        unique: true, // garantiza que el campo sea unico en la BD, pero no es amigable al usuario
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


usuario_Schema.plugin(uniqueValidator, {message: '{PATH} Ya esta registrado'});
/*utilizando mongoose-validator, se le pasa la la constante,y un mensaje el cual es 
opcional pero igual util se pone el path y el mensaje*/


module.exports = mongoose.model('Usuario',usuario_Schema);
/* en este caso se exporta el modelo pero se le cambio el nombre a Usuario, el cual contiene
todas las propiedades de usuario_Schema*/