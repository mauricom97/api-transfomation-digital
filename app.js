const express = require('express')
const app = express()
const port = process.env.port || 3352
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require("./routers")(app)

app.listen( port, () => {
    console.log(`APP in port ${port}`)
})