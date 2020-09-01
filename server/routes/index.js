/* eslint-disable no-undef */
const CONSTANTS = require("../constants");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const sampleData = require("../sampleData");
const { signin, signup } = require("../controllers/auth.controller");
const { getTickets, postTicket } = require("../controllers/ticket.controller");
const requireAuth = require("../middleware/auth.middleware");

const router = express.Router();

//AUTH ROUTES
router.post(`${CONSTANTS.ENDPOINT.AUTH}/signin`, signin);
router.post(`${CONSTANTS.ENDPOINT.AUTH}/signup`, signup);

// TICKET ROUTES
router.get(CONSTANTS.ENDPOINT.TICKET, requireAuth, getTickets);
router.post(CONSTANTS.ENDPOINT.TICKET, requireAuth, postTicket);

// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets);
});

// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets);
});

// LIST ENDPOINTS
router.get(CONSTANTS.ENDPOINT.LIST, function (req, res) {
  res.json(sampleData.listTextAssets);
});

router.post(CONSTANTS.ENDPOINT.LIST, function (req, res) {
  let listItem = {
    text: req.body.text,
    id: uuidv4(),
  };
  sampleData.listTextAssets.unshift(listItem);
  res.json(listItem);
});

router.delete(CONSTANTS.ENDPOINT.LIST + "/:id", function (req, res) {
  const { id } = req.params;
  var index = sampleData.listTextAssets.findIndex(
    (listItem) => listItem.id === id
  );
  if (index > -1) {
    sampleData.listTextAssets.splice(index, 1);
    res.json({ id, text: "This commented was deleted" });
  } else {
    res.status(404).send("Could not find item with id:" + id);
  }
});

module.exports = router;
