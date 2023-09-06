const { User } = require('../models');

const userData =
[
  {
    "username": "Sophie",
    "email": "sophienathalie.marquis85@gmail.com",
    "password": "admin12345"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;