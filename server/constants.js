/* eslint-disable no-undef */
const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.MASTERDETAIL = "/masterdetail";

CONSTANTS.ENDPOINT.GRID = "/grid";

CONSTANTS.ENDPOINT.LIST = "/list";

CONSTANTS.ENDPOINT.AUTH = "/auth";
CONSTANTS.ENDPOINT.TICKET = "/ticket";

module.exports = CONSTANTS;
