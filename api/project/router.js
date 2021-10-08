// build your `/api/projects` router here
const express = require('express')
const { validateProject, validateProjectUnique } = require('./mw')
const Projects = require('./model')
const router = express.Router()
router.get('/', (req, res, next) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})
router.post('/', validateProject, validateProjectUnique, (req, res, next) => {
    const completed = req.completed
    const project = {...req.body, project_completed:completed}
    Projects.add(project)
    .then(project => res.status(201).json(project))
    .catch(next)
})
module.exports = router