//requires
const express = require('express')
const app = express()

// *****CRUD  ******//

// GET is mostly used to fetch data, it's by default used on browsers
app.get('/usuario', function (req, res) {
    res.json('Hello usuario you are using the get method in desarrollo')
})



// POST is mostly used to create new data
app.post('/usuario', function (req, res) {

    let body = req.body; // gracias al body parser
    if (body.name == undefined) {

        res.status(400).json({ // working with status codes
            ok: false,
            messages: 'name is necesary'
        })

    } else {
        res.json({ persona: body })
    }
})


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
module.exports = { app }