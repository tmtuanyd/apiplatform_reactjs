import {USER_LOGIN_SUCCESS} from "./Constants";

export const tokenMiddleware = store => next => action => {
    switch (action.type){
        case USER_LOGIN_SUCCESS:
            window.localStorage.setItem('jwtToken', action.token)
            window.localStorage.setItem('user', action.user)
        default:
    }
    next(action)
}

//curried function is a function that return other function
// function a(store) => return function(next) => return function(action) => return function(action) => {}
