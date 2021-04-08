import {
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_LIST_ADD,
    BLOG_POST_LIST_RECEIVE,
    BLOG_POST_LIST_ERROR
} from "../actions/action";

export default (state = {
    posts: null,
    isFetching: false
}, action) => {
    switch (action.type){
        case BLOG_POST_LIST_REQUEST:
            return {
                ...state,
                isFetching: true,
                posts: action.data
            }
        case BLOG_POST_LIST_RECEIVE:
            return {
                ...state,
                posts: action.data,
                isFetching: false
            }
        case BLOG_POST_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                posts: null
            }
        case BLOG_POST_LIST_ADD:
            return {
                ...state,
                posts: state.posts ? state.posts.concat(action.data) : state.posts
            }
        default:
            return state;
    }
}