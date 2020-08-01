import React from 'react';
import './App.css';
import Header from './Header';
import Tindercard from './Tindercard';
import SwipeButton from './SwipeButton';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>

        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/">
            <Tindercard />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
