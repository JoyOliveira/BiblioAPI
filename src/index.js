const express = require('express');
const bodyParser = require('body-parser');
const userSchema = require('./userSchema.js')

//const mongoose = require('mongoose');

//criando a aplicação
const app = express();

//indicar que vou utilizar o Body-Parser
//a primeira função é o json, para que ele entenda quando enviar requisição em json
app.use(bodyParser.json());
//a segunda é a body-parser para ele entender a url
app.use(bodyParser.urlencoded({ extended: false }));

//criar uma rota simples
//req -> dados da requisição (parametros que formos receber, token de autenticação)
//res -> objeto que utilizaremos para enviar resposta para o usuário quando ele acessar a rota


//o '/' indica que é na rota raiz
app.get('/', (req, res) => {
    res.send('OK 352');
    console.log("reiniciou!")
});

/* mongoose
    .connect(
        'mongodb+srv://joy:um2345seis@cluster0.qdfhe.gcp.mongodb.net/biblioDB?retryWrites=true&w=majority',
        {
            useUnifiedTopology: true,
            useCreateIndex:true,
            useNewUrlParser: true
        }
    )
    .then(() => {
        console.log('Mongodb conectou...');
    });

module.exports = mongoose;
*/

//preciso usar sempre o mesmo 'app' para repassar pro authController
require('./controllers/authController')(app);

//quero ouvir na porta 3000
app.listen(3000);
