const bcrypt = require('bcryptjs');
const assert = require('assert');

const  User  = require('../../src/app/models/user');

const auth = require('../../src/app/controllers/authControler')

describe('user.js', async () => {
    it('should encrypt user password', async () =>{
        const user = await User.create({name: 'Joao', password: '1234', isAdmin: 'true'});
        const hash = await bcrypt.hash('1234', 15);
        
        assert.equal(user.password, hash);
    })
});
