import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './Helpers/history';

import './App.css';
import LoginPageContainer from './components/loginPage/LoginPageContainer';
import Header from './components/shared/NavBar/Header';
import PrivateRoute from './Helpers/PrivateRoute';
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPageContainer} />
        </div>
      </Router>
    </>
  );
}

export default App;
