import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserOrders from './components/Orders/UserOrders';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            
          </Route>
          <Route path='/register'>
            
          </Route>
          <Route path='/orders'>
            <UserOrders />
          </Route>
          <Route exact path='/'>
            
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
