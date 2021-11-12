const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const client = await models.Client.findOne({
            where:{
                uuid: req.params.uuid
            }
        })
        return res.send(client)
    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }
}