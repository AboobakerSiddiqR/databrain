import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Filter from "./screens/Filter";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginScreen />
          </Route>
          <Route strict path="/home">
            <HomeScreen />
          </Route>
          <Route strict path="/filter">
            <Filter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
