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
module.exports.postTicket = async function (req, res) {
  const ticket = new Ticket({
    title: req.body.title,
    description: req.body.description,
  });
  await ticket.save();

  res.send(ticket);
};
