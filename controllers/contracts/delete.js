const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const contract = await models.Contract.destroy({
            where:{
                uuid: req.params.uuid
            }
        })
        return res.send({response:{
            "success":contract
        }})
    } catch (error) {
        return res.send({response:{
            "error":error.message
        }})
    }
}