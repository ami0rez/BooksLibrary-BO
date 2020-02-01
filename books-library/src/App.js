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
import BookFormContainer from './components/homePage/components/Details/BookFormContainer';
import ProfileForm from './components/Administration/Forms/ProfileForm';
import LogoutContainer from './components/logout/LogoutContainer';
import BookForm from './components/Administration/Forms/BookForm';
import SubscriotionFrom from './components/Administration/Forms/SubscriotionFrom';

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <div>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/login" component={LoginPageContainer} />
          <PrivateRoute path="/subscribe" component={SubscriotionFrom} />
          <PrivateRoute path="/administration/editors" render={() => (<AdministrationContainer entityName="Editor" Form={EditorForm} />)} />
          <PrivateRoute path="/administration/categories" render={() => (<AdministrationContainer entityName="Categories" Form={CategoryForm} />)} />
          <PrivateRoute path="/administration/tags" render={() => (<AdministrationContainer entityName="Tags" Form={TagForm} />)} />
          <PrivateRoute path="/administration/authors" render={() => (<AdministrationContainer entityName="Author" Form={EditorForm} />)} />
          <PrivateRoute path="/books/:bookid" render={() => (<BookFormContainer />)} />
          <PrivateRoute path="/Profile" render={() => (<ProfileForm />)} />
          <PrivateRoute path="/user/logout" render={() => (<LogoutContainer />)} />
          <PrivateRoute path="/admin/editor/books" render={() => (<AdministrationContainer entityName="books/editor" Form={BookForm} />)} />
        </div>
      </Router>
    </>
  );
}

export default App;
