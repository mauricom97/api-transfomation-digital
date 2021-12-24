const searchSession = require("../controllers/sessions/searchSession")
const del = require("../controllers/sessions/delete")

const express = require('express');

let router = express.Router();

router.post('/', searchSession)
router.delete('/', del)

module.exports = router