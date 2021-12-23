const models = require("../../app/models")
const { v4: uuidv4 } = require('uuid');
const crypto = require("crypto")


module.exports = async (req, res) => {
    try {
        var token = crypto.randomBytes(64).toString('hex');
        const requestData = extractData(req)
        await analyseData(requestData)
        const user = await getLogin(requestData, token)
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

function extractData(request){
    const { user_email, user_password } = request.body
    return { user_email, user_password } 
}

async function analyseData(request){
    if(!request.user_email || !request.user_password){
        throw Error('Login ou senha não informado')
    }
}

async function getLogin(request, token){

    let user = await models.Users.findOne({
        where:{
            user_email: request.user_email,
            user_password: request.user_password
        }
    })
    if(user){
        user = user.dataValues
        let session = await models.Sessions.create(
            {
             "session_token": token,
             "user_uuid": user.user_uuid
            });
        
            if(session){
                session = session.dataValues
                user.session = session
                return user
            }else{
                throw Error('Não foi possivel efetuar o login')
            }
    }else{
        throw Error("Usuario não encontrado 😕")
    }
}
