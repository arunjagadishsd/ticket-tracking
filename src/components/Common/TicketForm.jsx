import React, { useState } from "react";
import { Button, FormGroup, Label, Input, Col, Row } from "reactstrap";

import CONSTANTS from "../../constants";

const TicketForm = ({ ticketProp, getTickets }) => {
  const ticketData = ticketProp
    ? { ...ticketProp }
    : {
        title: "",
        description: "",
        priority: "P4",
        status: "Backlog",
      };
  const [ticket, setTicket] = useState(ticketData);

  const postTicket = () => {
    let promiseList = fetch(CONSTANTS.ENDPOINT.TICKET, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token") || "",
      },
      body: JSON.stringify(ticket),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log("response", response);
        const res = response.json();
        console.log("res", res);
        return res;
      })
      .then((res) => {
        console.log("res", res);
        getTickets();
        return res;
      })
      .catch((err) => console.log("err", err));
    return promiseList;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTicket();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs="6">
          <FormGroup>
            <Label>Title</Label>
            <input
              type="text"
              onChange={handleChange}
              value={ticket.title}
              name="title"
              className="form-control"
              placeholder="Add Title"
              aria-label="Add text here..."
            />
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label>Description</Label>
            <input
              type="text"
              onChange={handleChange}
              value={ticket.description}
              name="description"
              className="form-control"
              placeholder="Add text here..."
              aria-label="Add text here..."
            />
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label>Priority</Label>
            <Input
              value={ticket.priority}
              onChange={handleChange}
              type="select"
              name="priority"
            >
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>
              <option>P4</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label>Status</Label>
            <Input
              value={ticket.status}
              onChange={handleChange}
              type="select"
              name="status"
            >
              <option>Completed</option>
              <option>In Progress</option>
              <option>To Do</option>
              <option>Backlog</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Button type="submit" color="primary">
          Add
        </Button>
      </FormGroup>
    </form>
  );
};

export default TicketForm;
