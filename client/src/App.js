import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import CreateOrderForm from './components/CreateOrderForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/create-order" component={CreateOrderForm}/>
        </Switch>
      </Router>
      <p>Hi</p>
    </div>
  );
}

export default App;
