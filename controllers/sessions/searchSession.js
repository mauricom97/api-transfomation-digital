const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        console.log(req.body)
        const session = await models.Sessions.findOne({
            where:{
                session_token: req.body.session_token
            },
            include:[{
                model: models.Users, as: 'User'
            }]
        })
        return res.send({response:{
            "success":session
        }})
    } catch (error) {
        console.log(error)
        return res.send({response:{
            "error":error.message
        }})
    }
}