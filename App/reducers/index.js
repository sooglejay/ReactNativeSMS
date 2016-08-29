'use strict';
import {combineReducers} from 'redux';
import login from './LoginReducers';
import updateNotification from './UpdateNotificationReducers';

const rootReducer = combineReducers({
    login,
    updateNotification
});
export default rootReducer;