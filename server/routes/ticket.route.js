/* eslint-disable no-undef */

const express = require("express");
const router = express.Router();

const ticketController = require("../controllers/ticket.controller");

router.get("/", ticketController);
