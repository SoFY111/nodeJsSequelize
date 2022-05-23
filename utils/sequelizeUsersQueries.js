import { success } from 'consola';
import dbContext from '../models/index';


//[GET] list all users
const getUsers = (req, res) => {
    try {
        dbContext.User.findAll().then((rows) => {
            res.send(rows.map(r => {
                let userss = {};
                userss.id = r.dataValues.id;
                userss.fullName = r.dataValues.firstName + ' ' + r.dataValues.lastName;
                userss.email = r.dataValues.email;
    
                return userss;
            }))
        })    
    } catch (error) {
        error({message: `users not found, ${err}`, badge: true})
        res.json({msg: "user not found", isSuccess: false})
    }
}

//[POST] create new user
const createUser = (req, res) => {
    try {
        if(!req.body.firstName || !req.body.lastName || !req.body.email) res.json({isSuccess: true, msg: "parameters are required"}) 

        const result = dbContext.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        })    

        if(result){
            success({message: 'user created', badge: true})
            res.json({msg: "user created", isSuccess: true})
        }
        
    } catch (error) {
        error({message: `user not created, ${err}`, badge: true})
        res.json({msg: "user not created", isSuccess: false})
    }
}

//[DELETE] delete user
const deleteUser = (req, res) => {
    try {
        dbContext.User.destroy({
            where: {
                id: req.params.userId
            }
        })

        success({message: 'user deleted', badge: true})
        res.json({msg: "user deleted", isSuccess: true})
    } catch (error) {
        error({message: `user not deleted, ${error}`, badge: true})
        res.json({msg: "user not deleted", isSuccess: false})
    }
}

//[PUT] update user data
const updateUser = (req, res) => {

    try {
        dbContext.User.update({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            password: req.body.password
        }, {
            where: {
                id: req.body.userId
            }
        })    

        success({message: 'user updated', badge: true})
        res.json({msg: "user updated", isSuccess: true})
    } catch (error) {
        error({message: `user not updated, ${error}`, badge: true})
        res.json({msg: "user not updated", isSuccess: false})
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}