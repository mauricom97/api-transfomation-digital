const create = require("../controllers/clients/create")
const update = require("../controllers/clients/update")
const get = require("../controllers/clients/get")
const express = require('express');

let router = express.Router();

router.post('/', create)
router.put('/:uuid', update)
router.get('/:uuid', get)
module.exports = router