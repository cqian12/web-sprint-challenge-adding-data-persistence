// build your `Resource` model here
const db = require('../../data/dbConfig')
module.exports = {
    find,
    add,
}
function find() {
    return db('resources')
}
async function add(resource) {
    const id = await db('resources').insert(resource)
    return db('resources').where('resource_id', id).first()
}