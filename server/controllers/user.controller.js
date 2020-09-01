/* eslint-disable no-undef */
const { User } = require("../models/user.model");
module.exports.getUsers = async function (req, res) {
  try {
    let users = await User.find({ role: "user" });
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};
