import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducers from '../Reducers';

export const store = createStore(
    Reducers,
    applyMiddleware(
        thunkMiddleware
    )
);
store.subscribe(() => console.log(store.getState()))