import React, { useState } from "react";
import { Button, FormGroup, Label, Input, Col, Row } from "reactstrap";

const TicketForm = () => {
  const [ticket, setTicket] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <Input type="select" name="priority">
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
            <Input type="select" name="status">
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
