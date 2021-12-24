const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        const users = await models.Users.findAll({
            order:[
                ["user_name", "ASC"]
            ]
        })
        return res.send({response:{
            "success":users
        }})
    } catch (error) {
        console.log(error)
    }
}