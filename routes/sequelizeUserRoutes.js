const router = require('express').Router();

const {createUser, getUsers, updateUser, deleteUser} = require('../utils/sequelizeUsersQueries')


router.post('/', createUser)
router.get('/', getUsers)
router.put('/user/:userId', updateUser)
router.delete('/user/:userId', deleteUser)

module.exports = router