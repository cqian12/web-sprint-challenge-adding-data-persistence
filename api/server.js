// build your server here and require it from index.js
const express = require('express')
const server = express()
server.use(express.json())
const ProjRouter = require('./project/router')
const ResRouter = require('./resource/router')
const TaskRouter = require('./task/router')

server.use('/api/resources', ResRouter)
server.use('/api/projects', ProjRouter)
server.use('/api/tasks', TaskRouter)
server.use('*', (req, res, next) => {
    next({status:404, message:'endpoint not found'})
})
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message
    })
  })
module.exports = server