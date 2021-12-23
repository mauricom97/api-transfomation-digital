const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const user = await models.Users.destroy({
            where:{
                user_uuid: req.params.user_uuid
            }
        })
        return res.send({response:{
            "success":user
        }})
    } catch (error) {
        return res.send({message:{
            "error":error.message
        }})
    }
}