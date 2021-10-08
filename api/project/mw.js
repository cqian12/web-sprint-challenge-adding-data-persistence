const db = require('../../data/dbConfig')
// const checkProjectId = async (req, res, next) => {
//     const {project_id} = req.params
//     try {
//         const project = await db('projects').where('project_id', project_id).first()
//         if (!project) {
//             res.status(404).json({message:`project with id ${project_id} not found`})
//         } else {
//             next()
//         }
//     } catch(err) {
//         next(err)
//     }
// }
const validateProjectUnique = async (req, res, next) => {
    try {
        const taken = await db('projects').where('project_name', req.body.project_name).first()
        
        taken ? res.status(400).json({message:`project_name already exists`})
        : next()
    } catch(err) {
        next(err)
    }
}
const validateProject = (req, res, next) => {
    const { project_name, project_completed } = req.body
    const booleanCapable = typeof project_completed
    console.log(booleanCapable)
    //uniques
    if (project_name === undefined || typeof project_name !== 'string' || project_name.trim() === '' ) {
        res.status(400).json({message:'invalid / missing project_name'})
    } 
    else if (typeof project_completed !== 'number') {
        res.status(400).json({message:'project_completed must be 0, 1, true, or false'})
    // } else if (project_completed === undefined || project_completed === false) {
    //     req.completed = 0
    // } else if (project_completed === true) {
    //     req.completed = 1  || project_completed !== 0 || project_completed !== 1
    } 
    else {
        // req.completed = project_completed
        next()
    }
  }
module.exports = {
    // checkProjectId,
    validateProject,
    validateProjectUnique
}