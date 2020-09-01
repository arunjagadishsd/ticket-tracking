import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Dashboard from "./components/Dashboard/Dashboard";

import MyTickets from "./components/MyTickets/MyTickets";

import Grid from "./components/Grid/Grid";

import Master_Detail from "./components/Master_Detail/Master_Detail";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/MyTickets" component={MyTickets} />
        <Route path="/Grid" component={Grid} />
        <Route path="/Master_Detail" component={Master_Detail} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
