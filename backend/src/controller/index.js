const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const Users = require('../models/user');

const addUserInformation = async (req, res) => {
  try {
      const adduser = await Users.create(req.body)
    res.json({user:adduser});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports = { addUserInformation};
