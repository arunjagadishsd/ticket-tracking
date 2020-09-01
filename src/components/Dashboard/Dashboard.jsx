import React, { useState, useEffect } from "react";

import WarningMessage from "../WarningMessage";
import CONSTANTS from "../../constants";
import TicketTable from "../Common/TicketTable";
import TicketForm from "../Common/TicketForm";
import { Row, Button } from "reactstrap";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [warningMessage, setWarningMessage] = useState({
    warningMessageOpen: false,
    warningMessageText: "",
  });

  const getTickets = () => {
    let promiseList = fetch(CONSTANTS.ENDPOINT.TICKET, {
      headers: {
        "x-auth-token": localStorage.getItem("token") || "",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((tickets) => {
        setTickets(tickets);
        return tickets;
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
      .then(() => {})
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
        <h3>Dashboard</h3>
      </div>
      {/* <Row>
        <Button className="float-right"> Add Ticket</Button>
      </Row> */}
      <TicketForm getTickets={getTickets} ticket={{}} />
      <Row>
        <TicketTable tickets={tickets} />
        <WarningMessage
          open={warningMessage.warningMessageOpen}
          text={warningMessage.warningMessageText}
          onWarningClose={closeWarningMessage}
        />
      </Row>
    </main>
  );
};
export default Dashboard;
