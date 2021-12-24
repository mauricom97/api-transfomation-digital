const models = require("../../app/models")
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    try {
        const entity = await models.Entity.findOne({
            where:{
                cpf_cnpj: {[Op.like]: `${req.params.cgcic}%`},
            }
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