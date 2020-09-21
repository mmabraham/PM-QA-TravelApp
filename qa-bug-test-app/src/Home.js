import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Trip from "./Trip";

export default function Home() {
  return (
    <HashRouter basebname="/">
        <Switch>
          <Route path="/" exact render={() => <App />} />
          <Route path="/trip" exact render={() => <Trip />} />
        </Switch>
    </HashRouter>
  );
}
