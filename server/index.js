require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.updateProduct)
app.get('/api/inventory/:id', ctrl.getOneProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected!')
    app.listen(SERVER_PORT, console.log(`1 cup milk, ${SERVER_PORT} teaspons sugar, 2 tablespoons butter`))
})
