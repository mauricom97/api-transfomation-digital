const models = require("../../app/models")
const nodemailer = require("nodemailer")
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        await analyseData(requestData)
        const contract = await createContract(requestData)
        for(let client of requestData.client){
            await clientContract(contract, client)
        }
        return res.send({response:{
            "success":contract
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
    const { numContract, dtStart, dtEnd, price, active, note, client } = request.body
    return { uuid: uuidv4(), numContract, dtStart, dtEnd, price, active, note, client }
}

async function analyseData (request) {
    if(!request.client){
        throw Error('uuid do cliente não foi informado')
    }
}

async function createContract (request) {
    try {
        const contract = await models.Contract.create(request)
        return contract
    } catch (error) {
        console.log(error)
    }
}

async function clientContract(contract, request){
    try {
        const clientContract = await models.clientContract.create({"uuid":uuidv4(),"contract_uuid": contract.dataValues.uuid, "client_uuid": request.uuid})
    } catch (error) {
       console.log(error) 
    }
}

// email = async (request) => {
//     let sender = nodemailer.createTransport({
//         host:"smtp.gmail.com",
//         service:"smtp.gmail.com",
//         port:587,
//         segure:true,
//         auth:{
//             user:"mauricionunesdasilvanunes@gmail.com",
//             pass:"Tesla08011942"
//         }
//     })
    
//     let emailSend = {
//         from: "mauricionunesdasilvanunes@gmail.com",
//         to: request.email,
//         subject: request.plain,
//         text: request.description
//     }

//     const success = sender.sendMail(emailSend, (error) => {
//         if (error) {
//             console.log(error)
//             return success
//         } else {
//             console.log(emailSend)
//             return 
//         }
//         });
// }