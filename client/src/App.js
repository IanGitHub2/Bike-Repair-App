import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import CreateOrderForm from './components/CreateOrderForm'
import './App.css';
import CreateRepairForm from './components/CreateRepairForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/create-order" component={CreateOrderForm}/>
          <Route exact path="/create-repair" component={CreateRepairForm}/>
          <Route exact path="/create-bicycle" component={CreateBicycleForm}/>
        </Switch>
      </Router>
      <p>Hi</p>
    </div>
  );
}

export default App;
