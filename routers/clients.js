const create = require("../controllers/clients/create")
const express = require('express');

let router = express.Router();

router.post('/', create)

module.exports = router