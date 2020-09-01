import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import MyTickets from "./components/MyTickets/MyTickets";
import Login from "./components/Login/login";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/MyTickets" component={MyTickets} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
