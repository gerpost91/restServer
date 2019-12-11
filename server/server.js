const express = require('express')
const app = express()


// get is mostly used to fetch data, it's by default used on browsers
app.get('/usuario', function (req, res) {
    res.json('Hello usuario you are using the get method')
})

// post is mostly used to create new data
app.post('/usuario', function (req, res) {
    res.json('Hello usuario you are using the post method')
})


// put is mostly used to update data as well path
// retorna la misma data que recibe
app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;
    res.json({
        id, 

    })
})

// currently it's no so normal delete data from a DB so the delete metho is commonly use to  change  the data
app.delete('/usuario', function (req, res) {
    res.json('Hello usuario you are using the delete method')
})

app.listen(3000, () => {
    console.log("Working on port 3000");
}
)