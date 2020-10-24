import React from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import NewDelivery from './components/NewDelivery';
import TrackDelivery from './components/TrackDelivery';
import DeliveryPage from './components/DeliveryPage'
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
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/profile" exact>
            <Profile/>
          </Route>
          <Route path="/newDelivery" exact>
            <NewDelivery/>
          </Route>
          <Route path="/trackDelivery" exact>
            <TrackDelivery/>
          </Route>
          <Route path="/deliveryList" exact>
            <DeliveryPage/>
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
