import {combineReducers} from "redux";
import blogPostList from "./reducers/blogPostList";
import { reducer as formReducer } from 'redux-form'
import auth from "./reducers/auth";

export default combineReducers({
    blogPostList,
    auth,
    form: formReducer
})
