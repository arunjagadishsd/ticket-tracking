import React, { useState, useEffect } from "react";

import WarningMessage from "../WarningMessage";
import CONSTANTS from "../../constants";
import TicketTable from "../Common/TicketTable";
import TicketForm from "../Common/TicketForm";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [warningMessage, setWarningMessage] = useState({
    warningMessageOpen: false,
    warningMessageText: "",
  });

  const getTickets = () => {
    let promiseList = fetch(CONSTANTS.ENDPOINT.TICKET, {
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRlMTAzYTI2YzhmMzhiMmM2Y2M2NmMiLCJpYXQiOjE1OTg5NTE3MzB9.clnDlzjQJOKF8nULP5aioKpFVe2KS7rQftCl47pWZOg",
      },
    }).then((response) => {
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
        <h3>Dashboard</h3>
      </div>
      <div className="row">
        <TicketTable tickets={tickets} />
        <WarningMessage
          open={warningMessage.warningMessageOpen}
          text={warningMessage.warningMessageText}
          onWarningClose={closeWarningMessage}
        />
      </div>
    </main>
  );
};
export default Dashboard;
