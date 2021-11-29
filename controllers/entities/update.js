const models = require("../../app/models")

module.exports = async (req, res) => {
    try {
        console.log(req.params)
        const requestData = await analyseData(req)
        const entity = await updateEntity(requestData)
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

async function analyseData (request) {
    if(!request.params.uuid){
        throw Error('uuid não informado')
    }
    return request
}

async function updateEntity(request){
    try {
        return models.Entity.update(request.body, {
            where:{
                uuid: request.params.uuid
            }
        })
    } catch (error) {
        console.log(error)
    }
}