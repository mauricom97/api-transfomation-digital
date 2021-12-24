const models = require("../../app/models")
const nodemailer = require("nodemailer")
const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        console.log(requestData)
        await analyseData(requestData)
        const entity = await createEntity(requestData)
        if(requestData.type.client){
            await createClient(entity.dataValues)
        }
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

function extractData (request) {
    const { fantasy_name, corporate_name, cep, address, state, city, cpf_cnpj, phone, email, type, company } = request.body
    return { uuid: uuidv4(), cpf_cnpj, fantasy_name, corporate_name, cep, address, state, city, phone, email, type, company }
}

async function analyseData (request) {
    const entity = await models.Entity.findOne({
        where:{
            cpf_cnpj: request.cpf_cnpj
        }
    })
    if(entity){
        throw Error('Entidade já cadastrada!')
    }else if(!request.cpf_cnpj){
        throw Error('Formulario de entidade preenchido incorretamente')
    }
}

async function createEntity (request) {
    try {
        const entity = await models.Entity.create(request)
        return entity
    } catch (error) {
        console.log(error)
    }
}

async function createClient(request) {
    try {
        await models.Clients.create({"entity_uuid":request.uuid})
    } catch (error) {
        console.log(error)
    }
}