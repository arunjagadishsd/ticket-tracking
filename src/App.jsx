/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import MyTickets from "./components/MyTickets/MyTickets";
import Login from "./components/Login/login";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      history.push("/");
    }
  }, []);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/MyTickets">
          <MyTickets />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Dashboard />
        </PrivateRoute>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
