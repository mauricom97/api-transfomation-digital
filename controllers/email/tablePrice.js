const nodemailer = require("nodemailer")

module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        await analyseData(res, requestData)
        await tablePrice(requestData)
    } catch (error) {
        console.log(error)
    }
}

extractData = (request) =>{
    const { name, plain, email, phone, description } = request.body
    return { name, plain, email, phone, description }
}

analyseData = async (res, request) => {
    if(request.name && request.plain && request.email && request.phone){
        res.status(200)
        res.send({response: "E-mail enviado com sucesso."})
    }else{
        res.status(400)
        res.send({response: "error"})
    }
}

tablePrice = async (request) => {
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
            return { success: false, error: error}
        } else {
            console.log(emailSend)
            return { success: true, email: emailSend }
        }
        });

    return success

}