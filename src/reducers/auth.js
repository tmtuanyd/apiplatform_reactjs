import {USER_LOGIN_SUCCESS} from "../Constants";

export default (state = {
    token: null,
    user: null,
    isAuthenticated: false
}, action)=>{
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                user: JSON.parse(action.user) ,
                isAuthenticated: true
            }
        default:
            return state
    }
}
