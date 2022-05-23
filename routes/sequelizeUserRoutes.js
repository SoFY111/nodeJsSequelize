import express from 'express';
import {createUser, getUsers, updateUser, deleteUser} from '../utils/sequelizeUsersQueries';

const router = express();

router.get('/dd', (req, res) => {
	res.json({msg: 'istek geldi'});
});

router.post('/', createUser);
router.get('/', getUsers);

router.put('/user/:userId', updateUser);
router.delete('/user/:userId', deleteUser);

module.exports = router;