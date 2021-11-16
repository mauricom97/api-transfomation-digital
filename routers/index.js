const entities = require("./entity")
const contracts = require("./contract")

module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({"message": "Hello world"})
    })
    app.use("/entities", entities)
    app.use("/contracts", contracts)
}