// build your `/api/tasks` router here
const express = require('express')
const { validateTask, validateTaskUnique } = require('./mw')
const Tasks = require('./model')
const router = express.Router()
router.get('/', (req, res, next) => {
    Tasks.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(next)
})
router.post('/', validateTask, validateTaskUnique, (req, res, next) => {
    const completed = req.completed
    const task = {...req.body, task_completed:completed}
    Tasks.add(task)
    .then(task => res.status(201).json(task))
    .catch(next)
})
module.exports = router