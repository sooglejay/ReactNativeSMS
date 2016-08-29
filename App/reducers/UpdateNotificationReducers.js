'use strict';
const initialState = {
    hasNewMessage: true,
    message:''
}
const DO_READ_NOTIFICATION = 'DO_READ_NOTIFICATION';
const DO_RELOAD_NOTIFICATION = 'DO_RELOAD_NOTIFICATION';
export default function updateNotification(state = initialState, action){
    switch (action.type) {
        case DO_READ_NOTIFICATION:
                  return Object.assign({}, state, {
                      hasNewMessage: false
                  });
        case DO_RELOAD_NOTIFICATION:
                  return Object.assign({}, state, {
                       hasNewMessage: true,
                       message: action.result
                  });
        default:
            return state;
    }
}