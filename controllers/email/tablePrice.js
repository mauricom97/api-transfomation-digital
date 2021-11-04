const nodemailer = require("nodemailer")

module.exports = async (req, res) => {
    try {
        const mail = await tablePrice(req.body)
        console.log(mail)
        res.send(mail)
    } catch (error) {
        console.log(error)
    }
}

const tablePrice = async (request) => {
    let sender = nodemailer.createTransport({
        host:"smtp-mail.outlook.com",
        service:"smtp-mail.outlook.com",
        port:587,
        segure:true,
        auth:{
            user:"mauricom7@hotmail.com",
            pass:"mbn112011"
        }
    })
    
    let emailSend = {
        from: "mauricom7@hotmail.com",
        to: request.email,
        subsject: "request.subsject",
        text: request.description
    }

    const success = sender.sendMail(emailSend, (error) => {
        if (error) {
            console.log(error)
            return { success: false, error: error}
        } else {
            console.log(emailSend)
            return { success: true, email: emailSend }
        }
        });

    return success

}