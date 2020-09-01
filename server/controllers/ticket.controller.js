/* eslint-disable no-undef */
const { Ticket } = require("../models/ticket.model");
module.exports.getTickets = async function (req, res) {
  try {
    let tickets = await Ticket.find();
    res.send(tickets);
  } catch (err) {
    console.log(err);
  }
};
module.exports.getMyTickets = async function (req, res) {
  try {
    let tickets = await Ticket.find({ createdBy: req.user._id });
    res.send(tickets);
  } catch (err) {
    console.log(err);
  }
};
module.exports.postTicket = async function (req, res) {
  const { title, description, priority, status } = req.body;
  const ticket = new Ticket({
    title,
    description,
    priority,
    status,
    createdBy: req.user._id,
  });
  await ticket.save();

  res.send(ticket);
};
