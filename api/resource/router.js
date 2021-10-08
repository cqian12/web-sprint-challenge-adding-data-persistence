// build your `/api/resources` router here
const express = require('express')
const { validateResource } = require('./mw')
const Resources = require('./model')
const router = express.Router()
router.get('/', (req, res, next) => {
    Resources.find()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})
router.post('/', validateResource, (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
    .then(resource => res.status(201).json(resource))
    .catch(next)
})
module.exports = router