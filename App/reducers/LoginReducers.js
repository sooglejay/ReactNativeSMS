/**
 * 用户登录Reducers
 */
'use strict';

const initialState = {
    loading : false,
    data:''
}
const DO_LOGIN = 'DO_LOGIN';
const DO_SIGN_OUT = 'DO_SIGN_OUT';
export default function login(state = initialState, action){
    switch (action.type) {
        case DO_LOGIN:
                  return Object.assign({}, state, {
                      loading: true,
                      data: action.result
                  });
        case DO_SIGN_OUT:
                  return Object.assign({}, state, {
                       loading: false,
                       data: action.result
                  });
        default:
            return state;
    }
}