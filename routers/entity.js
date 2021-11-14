const create = require("../controllers/entities/create")
const get = require("../controllers/entities/get")
const index = require("../controllers/entities/index")

const express = require('express');

let router = express.Router();

router.post('/', create)
router.get('/:uuid', get)
router.get('/', index)

module.exports = router