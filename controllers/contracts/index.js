const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const contract = await models.Contract.findAll({})
        return res.send({response:{
            "success":contract
        }})
    } catch (error) {
        return res.send({response:{
            "error":error.message
        }})
    }
}