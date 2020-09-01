/* eslint-disable no-undef */
const { User } = require("../models/user.model");
module.exports.login = async function () {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await user.comparePassword(
    req.body.password,
    user.password
  );
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();
  res.send(token);
};
