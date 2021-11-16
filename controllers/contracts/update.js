const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        await analyseData(req)
        const contract = await updateContract(req)
        return res.send({response:{
            "success":contract
        }})
    } catch (error) {
        return res.send({response:{
            "error":error.message
        }})
    }
}

async function analyseData (request) {
    if(!request.params.uuid){
        throw Error('uuid não informado')
    }
}

async function updateContract(req) { 
    try {
        const contract = await models.Contract.update(req.body, {
            where:{
                uuid: req.params.uuid
            }
        })
        return contract
    } catch (error) {
        console.log(error)
    }
}