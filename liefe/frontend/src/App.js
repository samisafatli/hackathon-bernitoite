import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NewDelivery from './components/NewDelivery';
import Loading from './components/Loading'
import Chat from './components/Chat'
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
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/newDelivery" exact>
            <NewDelivery/>
          </Route>
          <Route path="/loading" exact>
            <Loading/>
          </Route>
          <Route path="/chat" exact>
            <Chat/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
