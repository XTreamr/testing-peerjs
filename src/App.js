import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Sender from './Sender'
import Receiver from './Receiver'
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sender />
        </Route>
        <Route exact path="/receiver">
          <Receiver />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
