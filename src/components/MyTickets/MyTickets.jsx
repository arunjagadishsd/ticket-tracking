import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

import WarningMessage from "../WarningMessage";
import CONSTANTS from "../../constants";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [warningMessage, setWarningMessage] = useState({
    warningMessageOpen: false,
    warningMessageText: "",
  });

  const getTickets = () => {
    let promiseList = fetch(CONSTANTS.ENDPOINT.TICKET).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    });
    return promiseList;
  };
  const closeWarningMessage = () => {
    setWarningMessage({
      warningMessageOpen: false,
      warningMessageText: "",
    });
  };
  useEffect(() => {
    getTickets()
      .then((tickets) => {
        setTickets(tickets);
      })
      .catch((error) =>
        setWarningMessage({
          warningMessageOpen: true,
          warningMessageText: `${CONSTANTS.ERROR_MESSAGE.LIST_GET} ${error}`,
        })
      );
  }, []);
  return (
    <main id="mainContent" className="container">
      <div className="row justify-content-center py-5">
        <h3>Tickets</h3>
      </div>
      <div className="row">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket._id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <WarningMessage
          open={warningMessage.warningMessageOpen}
          text={warningMessage.warningMessageText}
          onWarningClose={closeWarningMessage}
        />
      </div>
    </main>
  );
};
export default MyTickets;
