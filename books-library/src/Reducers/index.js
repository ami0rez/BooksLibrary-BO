import { combineReducers } from 'redux';

import { authentication } from './AuthenticationReducer';
import { users } from './UserReducer';
import { alert } from './AlertReducer';

export default combineReducers({
    authentication,
    users,
    alert
});