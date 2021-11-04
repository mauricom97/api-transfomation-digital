const emails = require("./emails")

module.exports = (app) => {
    app.use("/emails", emails)
}