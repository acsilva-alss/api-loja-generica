const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

//Estrutura de usuário
const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

// antes de salvar no banco de dados, encripta a senha do usuário
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 15);
    this.password = hash;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;