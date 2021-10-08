// build your `Task` model here
const db = require('../../data/dbConfig')
module.exports = {
    find,
    add,
}
async function find() {
    const unformatted = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    .orderBy('t.task_id')
    const formatted = []
    
    unformatted.forEach(task => {
        if (task.task_completed === 0 || task.task_completed === null) {
            formatted.push({...task, task_completed:false })
        } else if(task.task_completed === 1) {
            formatted.push({...task, task_completed:true })
        } else {
            formatted.push(task)
        }
    })
    return formatted
}
async function add(resource) {
    const id = await db('tasks').insert(resource)
    return db('tasks').where('task_id', id).first()
}