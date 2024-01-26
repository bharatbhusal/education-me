const express = require("express")
const router = express.Router()
const usersController = require('./controllers')

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.addUser)

router.route('/:user')
    .get(usersController.getUser)
    .post(usersController.updateUser)

module.exports = router