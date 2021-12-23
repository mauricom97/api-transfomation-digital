const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const session = await models.Sessions.destroy({
            where:{
                session_token: req.body.session_token
            }
        })
        return res.send({response:{
            "success":session
        }})
    } catch (error) {
        return res.send({message:{
            "error":error.message
        }})
    }
}