import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NewDelivery from './components/NewDelivery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/newDelivery">
            <NewDelivery/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
