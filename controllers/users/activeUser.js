const models = require("../../app/models")
const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
    try {
        let user = await models.Users.update({"active": req.body.active}, {
            where: {
                user_uuid: req.params.user_uuid
            }
        })

        let userData = await models.Users.findOne({
            where:{
                user_uuid: req.params.user_uuid
            }
        })

        userData = userData.dataValues

        if(user){
            await mailUserActive(userData)
        }
        return res.send({
            response: {
                "success": user
            }
        })
    } catch (error) {
        console.log(error)
        return res.send({
            message: {
                "error": error.message
            }
        })
    }
}

async function mailUserActive(user_data){
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
            to: user_data.user_email,
            subject: 'Ativação de usuario realizada',
            text: 'Seu usuario foi ativado'
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