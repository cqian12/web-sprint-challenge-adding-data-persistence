const db = require('../../data/dbConfig')
const validateTask = (req, res, next) => {
    const { task_name, task_completed } = req.body
    const booleanCapable = typeof task_completed
    console.log(booleanCapable)
  
    if (task_name === undefined || typeof task_name !== 'string' || task_name.trim() === '' ) {
        res.status(400).json({message:'invalid / missing project_name'})
    } 
    // else if (typeof project_completed !== 'boolean' || typeof project_completed !== 'number' || typeof project_completed !== 0 || typeof project_completed !== 1) {
    //     res.status(400).json({message:'project_completed must be 0, 1, true, or false'})
    // } else if (project_completed === undefined || project_completed === false) {
    //     req.completed = 0
    // } else if (project_completed === true) {
    //     req.completed = 1
    // } 
    else {
        // req.completed = project_completed
        next()
    }
  }
const validateTaskUnique = async (req, res, next) => {
    try {
        const taken = await db('tasks').where('task_name', req.body.task_name).first()
        
        taken ? res.status(400).json({message:`task_name already exists`})
        : next()
    } catch(err) {
        next(err)
    }
}
module.exports = {
    validateTask,
    validateTaskUnique
}