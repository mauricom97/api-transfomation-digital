const index = require("../controllers/clients/index")


const express = require('express');

let router = express.Router();


router.get('/', index)


module.exports = router