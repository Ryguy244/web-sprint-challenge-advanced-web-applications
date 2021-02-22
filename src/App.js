import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/bubblepage">
          <BubblePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as ah PrivateRoute
