import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import { users } from './UserReducer';
import { alert } from './AlertReducer';
import filtersReducer from './filtersReducer';
import booksReducer from './booksReducer';
import administrationReducer from './administrationReducer';

export default combineReducers({
    authentication,
    users,
    alert,
    filters: filtersReducer,
    books: booksReducer,
    administration: administrationReducer,
});