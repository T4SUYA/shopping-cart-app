const express = require('express')
const http = require('http')
const cors = require('cors')
const routes = require('./routes')
const dotenv = require('dotenv')
const app = express()
const server = http.createServer(app)



dotenv.config()

app.use(express.json())

app.use(cors())

app.use(routes)

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));