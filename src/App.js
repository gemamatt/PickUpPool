import React, {useState, useEffect } from 'react';
import {auth} from './firebase';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserOrders from './components/Orders/UserOrders';
import Principal from './components/Principal/Principal';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {
  const [user, setUser] = useState(null) //No hubo nada establecido(ningún valoor)
  useEffect(() => { //Estado del servidor
    auth.onAuthStateChanged((user) => { //user del servidor
      if (user) {
        setUser(user) //Cuando existe el usuario setUser. Sincro
      } else {
        setUser(false) //Cuando no existe el usuario
      }
    })
  }, [])
  return (
    <>
    {user !== null ? (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            <Principal />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/orders'>
            <UserOrders />
          </Route>
          <Route exact path='/'>
            <Login user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
     ): <p>Cargando...</p>}
     </>
  );
}
export default App;

