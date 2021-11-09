const models = require("../../app/models")
const nodemailer = require("nodemailer")
const { v4: uuidv4 } = require('uuid');
module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        //await analyseData(requestData)
        const client = await createClient(requestData)
        //await email(requestData)
        res.send(client)
        
    } catch (error) {
        console.log(error)
    }
}

extractData = (request) => {
    const { name, cpf_cnpj, phone, birth_date, active, email } = request.body
    return { uuid: uuidv4(), name, cpf_cnpj, phone, birth_date, active, email }
}

analyseData = async (request) => {
    return request
}

createClient = async (request) => {
    try {
        const client = await models.Client.create(request)
        return client
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
