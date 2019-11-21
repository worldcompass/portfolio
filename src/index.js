import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Cv from "./components/cv";
import App from "./components/mainpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cv">
          <Cv />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(<Layout />, rootElement);
