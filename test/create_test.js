const assert = require('assert');
const User = require('../src/user');
const mongoose = require('../db/db_connnect');

describe('Creating Records',()=>
{
    it('save a user',()=>
    {
    const joe = new User({ name :'DonJoe1'});
    joe.save();
    });
});