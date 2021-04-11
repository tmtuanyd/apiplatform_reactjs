import {USER_LOGIN_SUCCESS} from "../Constants";

export default (state = {
    token: null,
    user: null
}, action)=>{
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                user: action.user
            }
        default:
            return state
    }
}
