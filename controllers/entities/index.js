const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const entity = await models.Entity.findAll({})
        return res.send({response:{
            "success":entity
        }})
    } catch (error) {
        console.log(error)
        res.status(400)
        return res.send({response:{
            "error":error.message
        }})
    }
}