/* eslint-disable no-undef */
const { Ticket } = require("../models/tikcet.model");
module.exports.getTickets = async function () {
  try {
    let tickets = await Ticket.find();
    res.send(tickets);
  } catch (err) {
    console.log(err);
  }
};
