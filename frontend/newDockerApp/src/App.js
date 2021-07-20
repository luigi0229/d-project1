import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from './Main';
import Results from './Results';
import {SocketContext, socket} from './socket';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <SocketContext.Provider value={socket}>
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
    </SocketContext.Provider>
  );
}
