const { Router } = require('express');
const router = Router();

const { getUsers, createUsers, getUserById, deleteUser, updateUser} = require('../controllers/index.controller')
const {route} = require("express/lib/router");

router.get('/usersi', getUsers);
router.get('/usersi/:id', getUserById);
router.post('/usersi', createUsers );
router.delete('/usersi/:id', deleteUser);
router.put("/usersi/:id", updateUser);


module.exports = router;


