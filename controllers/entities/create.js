const models = require("../../app/models")
const nodemailer = require("nodemailer")
const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        await analyseData(requestData)
        const entity = await createEntity(requestData)
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

extractData = (request) => {
    const { fantasy_name, corporate_name, cep, address, state, city, cpf_cnpj, phone, email } = request.body
    return { uuid: uuidv4(), cpf_cnpj, fantasy_name, corporate_name, cep, address, state, city, phone, email }
}

analyseData = async (request) => {
    const entity = await models.Entity.findOne({
        where:{
            cpf_cnpj: request.cpf_cnpj
        }
    })
    if(entity){
        throw Error('Entidade já cadastrada!')
    }else{
        return request
    }
}

createEntity = async (request) => {
    try {
        const entity = await models.Entity.create(request)
        return entity
    } catch (error) {
        console.log(error)
    }
}

email = async (request) => {
    let sender = nodemailer.createTransport({
        host:"smtp.gmail.com",
        service:"smtp.gmail.com",
        port:587,
        segure:true,
        auth:{
            user:"mauricionunesdasilvanunes@gmail.com",
            pass:"Tesla08011942"
        }
    })
    
    let emailSend = {
        from: "mauricionunesdasilvanunes@gmail.com",
        to: request.email,
        subject: request.plain,
        text: request.description
    }

    const success = sender.sendMail(emailSend, (error) => {
        if (error) {
            console.log(error)
            return success
        } else {
            console.log(emailSend)
            return 
        }
        });
}
