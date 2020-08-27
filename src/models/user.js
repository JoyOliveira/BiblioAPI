const mongoose = require('../database');
const bcrypt = require('bcryptjs');

//definindo o Schema (campos do nosso banco de dados na tabela de usuários)
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//antes de salvar o usuário (função 'pre' é do mongoose 
//para dizer que vai acontecer antes de salvar)
userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})
//aqui defino o model
const User = mongoose.model('User', userSchema);

module.exports = User;
