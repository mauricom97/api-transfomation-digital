const models = require("../../app/models")

module.exports = async (req, res) => {

    try {
        const requestData = await analyseData(req)
        const client = await updateClient(requestData)
        return res.send({response:{
            "success": client
        }})
    } catch (error) {
        console.log(error)
        res.send({response:{
            "error":error.message
        }})
    }

}

analyseData = async (request) => {

    if(!request.params.uuid || !request.body.cpf_cnpj || !request.body.email){
        throw Error('Confira os dados informados')
    }
    return request
}

updateClient = async (request) => {

    try {
        let client = await models.Client.update(request.body, {
            where:{
                uuid: request.params.uuid
            }
        })

        client = await models.Client.findOne({
            where:{
                uuid: request.params.uuid
            }
        })

        return client
    } catch (error) {
        console.log(error)
    }
}