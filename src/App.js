//import logo from './logo.svg';
/*parte da logo original não alterei 25/03/2021*/

//import React, { useState } from 'react';
import React from 'react';
//sem useState 25/03/2021

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences'; //'../Preferences/Preferences';

// // alternativas para useState
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }
import useToken from './useToken';
// //fim das alternativas

function App() {
  //const [token, setToken] = useState();
  // const token = getToken();
  const { token, setToken } = useToken();
  //fim alternativa useState

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Aplicação</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
      <form></form>
    </div>
  );
}

export default App;
