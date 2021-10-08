// build your `Project` model here
const db = require('../../data/dbConfig')
module.exports = {
    find,
    add,
}
async function find() {
    const unformatted = await db('projects')
    const formatted = []
    
    unformatted.forEach(project => {
        if (project.project_completed === 0 || project.project_completed === null) {
            formatted.push({...project, project_completed:false })
        } else if(project.project_completed === 1) {
            formatted.push({...project, project_completed:true })
        } else {
            formatted.push(project)
        }
    })
    return formatted
}
async function add(resource) {
    const id = await db('projects').insert(resource)
    return db('projects').where('project_id', id).first()
}
