const models = require("../../app/models")
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
    try {
        const requestData = await extractData(req)
        await analyseData(requestData)
        const user = await createUser(requestData)
        if(user){
            await emailNewUser(user)
        }
        return res.send({response:{
            "success":user
        }})
    } catch (error) {
        console.log(error)
        return res.send({message:{
            "error":error.message
        }})
    }
}

async function extractData(request){
    const { user_name, user_email, user_password, date_birth } = request.body
    return { user_uuid: uuidv4(), user_name, user_email, user_password, date_birth }
}

async function analyseData(request){
    if(!request.user_email || !request.user_name || !request.user_password) {
        throw Error('Nenhuma das informacoes pode estar vazia')
    }else{
        let user = await models.Users.findOne({
            where:{
                user_email: request.user_email
            }
        })
        if(user){
            throw Error('O email informado já esta sendo ultilizado')
        }else{
            return request
        }
        
    }

}

async function createUser(request){
    try {
        const user = await models.Users.create(request)
        return user

    } catch (error) {
        console.log(error)
    }
}

async function emailNewUser(request){
console.log(request.dataValues)
    try {
        const transporter = nodemailer.createTransport({ // Configura os parâmetros de conexão com servidor.
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
              user: 'mauricom7@hotmail.com',
              pass: 'mbn112011'
            }
          })

          const mailOptions = { // Define informações pertinentes ao E-mail que será enviado
            from: 'mauricom7@hotmail.com',
            to: request.user_email,
            subject: 'Solicitação de acesso para novo usuario',
            text: 'Seu usuário está em processo de aprovação'
          }

          transporter.sendMail(mailOptions, (err, info) => { // Função que, efetivamente, envia o email.
            if (err) {
              return console.log(err)
            }
            console.log(info)
          })
    } catch (error) {
        console.log(error)
    }

}