const models = require("../../app/models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = async (req, res) => {
    try {
        const entity = await models.Entity.findOne({
            where: {
                fantasy_name:{
                    [Op.like]: `%${req.params.name}%`
                }
            },
        })
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