const {Router} = require('express')
const router = Router();
const cors = require('cors');

//Importando as funções da classe Controller
const {getUsers, createUser, getUserByID, deleteUser, updateUser } = require('../controller/userController')

//Rotas das requisções
router.get('/users', getUsers);
router.post('/users',createUser);
router.get('/users/:id', getUserByID);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

//Exportando o metodo router para fora do arquivo
module.exports = router;