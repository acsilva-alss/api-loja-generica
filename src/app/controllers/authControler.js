const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const User = require("../models/user");


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86408,
    });
}

module.exports = {
    async register(req, res){
        const { login } = req.body;
        try{
            if(await User.findOne({ login }))
                return res.status(400).send({ error: 'User already exists' });
            
            const user = await User.create(req.body);
            
            user.password = undefined;

            return res.send({ 
                user,
                token: generateToken({id: user.id}),
            });
        } catch(err){
            return res.status(400).send({ error: 'Registration failed ' + err });
        }
    },

    async authenticate(req, res){
        const { login, password } = req.body;

        const user = await User.findOne({ login }).select('+password');
        
        if(!user)
            return res.status(400).send({ error: 'User not found' });
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password'});
        
        user.password = undefined;
        
        res.send({ 
            user, 
            token: generateToken({id: user.id}),
        });
    },

    async logout(req, res){
        res.status(200).send({token: null});
    }
}