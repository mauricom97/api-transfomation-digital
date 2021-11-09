const tablePrice = require("../controllers/email/tablePrice")
const express = require('express');

let router = express.Router();

router.post('/tablePrices', tablePrice)

module.exports = router