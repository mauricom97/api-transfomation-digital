const emails = require("./emails")
const clients = require("./clients")
module.exports = (app) => {
    app.use("/emails", emails)
    app.use("/clients", clients)
}