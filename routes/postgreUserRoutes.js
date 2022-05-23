import db from '../utils/queries';
import express from 'express';

const router = express();

router.get('/users', db.getUsers);
router.get('/users/:id', db.getUserById);
router.post('/users', db.createUser);
router.put('/users', db.updateUser);
router.delete('/users/:id', db.deleteUser);

module.exports = router;