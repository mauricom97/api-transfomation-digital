const create = require("../controllers/entities/create")
const get = require("../controllers/entities/get")
const index = require("../controllers/entities/index")
const update = require("../controllers/entities/update")
const destroy = require("../controllers/entities/delete")

const express = require('express');

let router = express.Router();

router.post('/', create)
router.get('/:uuid', get)
router.get('/', index)
router.put('/:uuid', update)
router.delete('/:uuid', destroy)

module.exports = router