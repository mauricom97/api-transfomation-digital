const emails = require("./emails")
const entities = require("./entity")
module.exports = (app) => {
    app.get("/status", (req, res) => {
        res.send({"message": "Hello world"})
    })
    app.use("/emails", emails)
    app.use("/entities", entities)
}