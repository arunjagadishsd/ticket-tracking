import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CONSTANTS from "../../constants";

const Dashboard = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  let history = useHistory();

  const login = () => {
    console.log("user", user);
    let promiseList = fetch("http://localhost:3001/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((err) => console.log("err", err));
    return promiseList;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = await login();
    localStorage.setItem("token", authToken);
    history.push("/");
  };
  return (
    <main id="mainContent" className="container">
      <div className="row justify-content-center py-5">
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit} className="my-3 col-5 m-auto">
        <input
          type="text"
          onChange={handleChange}
          value={user.email}
          name="email"
          className="form-control my-3"
          placeholder="Email"
          aria-label="Add text here..."
        />
        <input
          type="password"
          onChange={handleChange}
          value={user.password}
          name="password"
          className="form-control my-3"
          placeholder="Password"
          aria-label="Add text here..."
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};
export default Dashboard;
