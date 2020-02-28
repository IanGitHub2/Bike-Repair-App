import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateOrderForm from './components/CreateOrderForm'
import './App.css';
import CreateRepairForm from './components/CreateRepairForm';
import CreateBicycleForm from './components/CreateBicycleForm';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/create-order" component={CreateOrderForm}/>
          <Route exact path="/create-repair" component={CreateRepairForm}/>
          <Route exact path="/create-bicycle" component={CreateBicycleForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
