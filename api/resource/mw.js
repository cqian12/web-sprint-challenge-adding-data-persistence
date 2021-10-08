const db = require('../../data/dbConfig')
const checkResourceId = async (req, res, next) => {
    const {resource_id} = req.params
    try {
        const resource = await db('resources').where('resource_id', resource_id).first()
        if (!resource) {
            res.status(404).json({message:`resource with id ${resource_id} not found`})
        } else {
            next()
        }
    } catch(err) {
        next(err)
    }
}
const validateResource = (req, res, next) => {
    const { resource_name } = req.body
  
    if (resource_name === undefined || typeof resource_name !== 'string' || resource_name.trim() === '' ) {
      res.status(400).json({message:'invalid / missing resource_name'})
    } else {
      next()
    }
  }
module.exports = {
    checkResourceId,
    validateResource
}