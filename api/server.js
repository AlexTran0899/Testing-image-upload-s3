const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const Auth = require('./Auth/Image')

server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/auth', Auth )


// server.use((err, req, res) =>{
//     res.status(500).json({
//         message:err.message,
//         stack: err.stack
//     })
// })

module.exports = server;