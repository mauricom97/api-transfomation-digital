const create = require("../controllers/users/create")
const login = require("../controllers/users/getLogin")
const index = require("../controllers/users/index")
const activeUser = require("../controllers/users/activeUser")
const del = require("../controllers/users/delete")

const express = require('express');

let router = express.Router();

router.post('/', create)
router.post('/login', login)
router.put('/active/:user_uuid', activeUser)
router.get('/', index)
router.delete('/:user_uuid', del)

module.exports = router