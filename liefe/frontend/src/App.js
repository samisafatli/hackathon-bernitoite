import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NewDelivery from './components/NewDelivery';
import TrackDelivery from './components/TrackDelivery';
import DeliveryList from './components/DeliveryList'
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
          <Route path="/trackDelivery" exact>
            <TrackDelivery/>
          </Route>
          <Route path="/deliveryList" exact>
            <DeliveryList/>
          </Route>
          <Route path="/sellerLoading" exact>
            <Loading seller/>
          </Route>
          <Route path="/buyerLoading" exact>
            <Loading />
          </Route>
          <Route path="/chat/:id" exact component={Chat}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
