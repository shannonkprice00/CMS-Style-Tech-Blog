const { User } = require('../models');

const userData = [
    {
        username: 'shannonkprice00',
        email: 'shannonkprice00@test.com',
        password: 'Password1'
    },
    {
        username: 'kelleychristine23',
        email: 'kelleychristine23@test.com',
        password: 'Password1'
    },
    {
        username: 'hannahlhicks24',
        email: 'hannahlhicks24@test.com',
        password: 'Password1'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;