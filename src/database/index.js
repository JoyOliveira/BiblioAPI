const mongoose = require('mongoose');

//vou conectar aqui
mongoose
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