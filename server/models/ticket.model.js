/* eslint-disable no-undef */
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  assignee: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  label: {
    type: Schema.Types.ObjectId,
    ref: "Label",
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
  },
  priority: {
    type: String,
    required: true,
    default: "P4",
    enum: ["P1", "P2", "P3", "P4"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = model("Todo", ticketSchema);
