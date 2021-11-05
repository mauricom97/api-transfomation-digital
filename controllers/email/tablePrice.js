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