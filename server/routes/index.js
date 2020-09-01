/* eslint-disable no-undef */
const CONSTANTS = require("../constants");
const express = require("express");
const { signin, signup } = require("../controllers/auth.controller");
const {
  getTickets,
  postTicket,
  getMyTickets,
} = require("../controllers/ticket.controller");
const requireAuth = require("../middleware/auth.middleware");

const router = express.Router();

//AUTH ROUTES
router.post(`${CONSTANTS.ENDPOINT.AUTH}/signin`, signin);
router.post(`${CONSTANTS.ENDPOINT.AUTH}/signup`, signup);

// TICKET ROUTES
router.get(CONSTANTS.ENDPOINT.TICKET, requireAuth, getTickets);
router.get(`${CONSTANTS.ENDPOINT.TICKET}/me`, requireAuth, getMyTickets);
router.post(CONSTANTS.ENDPOINT.TICKET, requireAuth, postTicket);

module.exports = router;
