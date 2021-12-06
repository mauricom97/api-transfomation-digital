const session = require('express-session')
const entities = require("./entity")
const contracts = require("./contract")
const users = require("./user")

module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({"message": "Hello world"})
    })
    app.use("/entities", entities)
    app.use("/contracts", contracts)
    app.use("/users", users)
}