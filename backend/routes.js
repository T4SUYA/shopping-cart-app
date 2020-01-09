const express = require('express')

const routes = express.Router()

const db = require('./db.json')

routes.get('/products', (req,res) => {
    res.send(db)
})

module.exports = routes