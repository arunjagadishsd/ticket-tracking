import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const TicketTable = ({ tickets }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket._id}>
            <td>{ticket._id}</td>
            <td>{ticket.title}</td>
            <td>{ticket.description}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.any,
};

export default TicketTable;
