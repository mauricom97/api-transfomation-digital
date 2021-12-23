const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const client = await models.Clients.findAll({
            include:[{
                model: models.Entity, as: "entity_uuid",
                require: true
            }]
        })
        return res.send({response:{
            "success":client
        }})
    } catch (error) {
        console.log(error)
        res.status(400)
        return res.send({response:{
            "error":error.message
        }})
    }
}