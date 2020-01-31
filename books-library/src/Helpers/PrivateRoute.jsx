import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ Component, render, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? Component ? <Component {...props} /> : render()
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)