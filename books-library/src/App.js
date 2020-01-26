import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './Helpers/history';

import './App.css';
import LoginPageContainer from './components/loginPage/LoginPageContainer';
import Header from './components/shared/NavBar/Header';
import PrivateRoute from './Helpers/PrivateRoute';
import HomePage from './components/homePage/HomePage';
import AdministrationContainer from './components/Administration/AdministrationTable/AdministrationContainer';
import EditorForm from './components/Administration/Forms/EditorForm';
import TagForm from './components/Administration/Forms/TagForm';
import CategoryForm from './components/Administration/Forms/CategoryForm';

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/administration/editors" render={() => (<AdministrationContainer entityName="Editor" Form={EditorForm} />)} />
          <Route path="/administration/categories" render={() => (<AdministrationContainer entityName="Categories" Form={CategoryForm} />)} />
          <Route path="/administration/tags" render={() => (<AdministrationContainer entityName="Tags" Form={TagForm} />)} />
          <Route path="/administration/authors" render={() => (<AdministrationContainer entityName="Author" Form={EditorForm} />)} />
        </div>
      </Router>
    </>
  );
}

export default App;
