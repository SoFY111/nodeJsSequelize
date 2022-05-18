const {success, error} = require('consola');
const db = require('../models/index');
const dbContext = require('../models/index');


//[GET] list all users
const getUsers = (req, res) => {
    dbContext.User.findAll().then((rows) => {
        res.send(rows.map(r => {
            let userss = {}
            userss.id = r.dataValues.id
            userss.fullName = r.dataValues.firstName + ' ' + r.dataValues.lastName
            userss.email = r.dataValues.email

            return userss;
        }))
    })
}

//[POST] create new user
const createUser = (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.email) res.json({isSuccess: true, msg: "parameters are required"}) 

    dbContext.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then((rows) => {
        success({message: 'user created', badge: true})
        res.json({isSuccess: true, msg: "user created"})
    }).catch((err) => {
        error({message: `user not created, ${err}`, badge: true})
        res.json({isSuccess: false, msg: "user not created"})
    })
}

//[DELETE] delete user
const deleteUser = (req, res) => {
    dbContext.User.destroy({
        where: {
            id: req.params.userId
        }
    }).then((rows) => {
        success({message: 'user deleted', badge: true})
        res.json({isSuccess: true, msg: "user deleted"})
    }).catch((err) => {
        error({message: `user not deleted, ${err}`, badge: true})
        res.json({isSuccess: false, msg: "user not deleted"})
    })
}

//[PUT] update user data
const updateUser = (req, res) => {
    dbContext.User.update({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.firstName,
        password: req.body.password
    }, {
        where: {
            id: req.body.userId
        }
    }).then((rows) => {
        success({message: 'user updated', badge: true})
        res.json({isSuccess: true, msg: "user updated"})
    }).catch((err) => {
        error({message: `user not updated, ${err}`, badge: true})
        res.json({isSuccess: false, msg: "user not updated"})
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}