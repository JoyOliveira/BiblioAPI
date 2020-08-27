/*
Criando o controller de autenticação
*/

//chamo o express pois vou usar rotas
const express = require('express');
//vou precisar do model de User para login e cadastro
const User = require('../models/user');


const router = express.Router();

router.post('/register', async(req, res) => {
    
    const { email } = req.body;
    try{ 
        //verifico se já existe usuário cadastrado com o email
        if (await User.findOne({ email }))
            return res.status(400).send({erro: 'Email já cadastrado'})
        // vou criar um usuário quando essa rota for chaamda
        // o await faz com que espere o usuário ser criado
        //todos parametros vão estar dentro do req.Body
        const user = await User.create(req.body);

        user.password = undefined;

       
        return res.send({ user});     
    } catch (err) {
        return res.status(400).send({erro: 'Falha no regitro de usuário' });
    }
});

//vou definir uma rota /auth/register
module.exports = app => app.use('/auth', router);