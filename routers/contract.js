const create = require("../controllers/contracts/create")
const get = require("../controllers/contracts/get")
const update = require("../controllers/contracts/update")
const index = require("../controllers/contracts/index")
const destroy = require("../controllers/contracts/delete")

const express = require('express');

let router = express.Router();

router.post('/', create)
router.get('/:uuid', get)
router.get('/', index)
router.put('/:uuid', update)
router.delete('/:uuid', destroy)


module.exports = router