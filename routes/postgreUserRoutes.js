const router = require('express').Router()
const db = require('../utils/queries')

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router