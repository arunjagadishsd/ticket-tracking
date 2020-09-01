import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const TicketForm = () => {
  const [ticket, setTicket] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };
  const handleDropDownChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className=" my-3 m-auto">
      <input
        type="text"
        onChange={handleChange}
        value={ticket.title}
        name="title"
        className="form-control"
        placeholder="Add Title"
        aria-label="Add text here..."
      />
      <input
        type="text"
        onChange={handleChange}
        value={ticket.description}
        name="description"
        className="form-control"
        placeholder="Add text here..."
        aria-label="Add text here..."
      />
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Completed</DropdownItem>
          <DropdownItem>In Progress</DropdownItem>
          <DropdownItem>To Do</DropdownItem>
          <DropdownItem>Backlog</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>P1</DropdownItem>
          <DropdownItem>P2</DropdownItem>
          <DropdownItem>P3</DropdownItem>
          <DropdownItem>P4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <button type="submit" className="btn btn-primary ml-2">
        Submit
      </button>
    </form>
  );
};

export default TicketForm;
