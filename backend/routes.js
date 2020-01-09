const express = require('express')

const routes = express.Router()

const db = require('./db.json')

routes.get('/', (req,res) => {
    res.send('Server is up and running')
})

routes.get('/products', (req,res) => {
    res.send(db)
})

module.exports = routes