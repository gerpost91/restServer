//requires
const express = require('express')
const app = express()

// se importan el modelo creado models para esta ruta
const Usuario = require('../models/ususario')

// *****CRUD  ******//

// GET is mostly used to fetch data, it's by default used on browsers
app.get('/usuario', function (req, res) {
    res.json('Hello usuario you are using the get method in desarrollo')
})



// POST is mostly used to create new data
app.post('/usuario', function (req, res) {

    let body = req.body; // gracias al body parser

     /* De esta forma se accede a todos los campos creados por el model/Usuarios, asi mismo est
    pasando como parametros el objeto y lo esta igualando al esquema dado por el modelo*/
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role})

   /*guardando en la base de datos, se utiliza un callback*/          
   usuario.save((err, UsuarioDB)=>{
   /* de existir un error entra en if, este usa un retur para acortar codigo
   y utilizar un else */
   
    if (err) {
      return  res.status(400).json(
          {
            ok: false,
            err
          });        
        }

     /** si no entra en el if devuelve el objeto creado */       
    res.json({
        ok: true,
        usuario: UsuarioDB
    });
   });
})
  /*  if (body.name == undefined) {
        res.status(400).json({ // working with status codes
            ok: false,
            messages: 'name is necesary'
        })
    } else {
        res.json({ persona: body })
    }
})*/


// PUT is mostly used to update data as well path
// retorna la misma data que recibe
app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;
    res.json({
        id,

    })
})

// currently DELETE it's no so normal delete data from a DB so the delete metho is commonly use to  change  the data
app.delete('/usuario', function (req, res) {
    res.json('Hello usuario you are using the delete method')
})

// exports
module.exports = app ;
// al ser una exportacion unica no necesita ser instaciada