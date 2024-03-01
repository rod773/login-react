import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Preferences from "../components/Preferences/Preferences";
import Login from "../components/Login/Login";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.toke;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
