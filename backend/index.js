const express = require('express')

const app = express()

const cors = require('cors')

const routes = require('./routes')

const PORT = process.env.PORT || 3333

app.use(express.json())

app.use(routes)

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server has started at ${PORT}`)
});